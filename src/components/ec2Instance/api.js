import AWS                  from 'aws-sdk';
import { camelizeKeys }     from 'humps';
import { flatten }          from 'lodash';

export function fetchAllEc2Instances(credentials) {
    const ec2 = new AWS.EC2(credentials);
    return ec2.describeRegions().promise()
        .then((result) => {
            const regions = result.Regions.map(region => region.RegionName);
            const allRegions = regions.map((region) => {
                const regionCreds = {...credentials, region };
                const ec2Region = new AWS.EC2(regionCreds);
                return ec2Region.describeInstances({}).promise()
                    .then((instances) => {
                        return Promise.resolve({ region, instances });
                    });
            });
            return Promise.all(allRegions);
        })
        .then((result) => {
            const instances = result.map((r) => {
                const results = r.instances.Reservations.map((reservation) => {
                    return reservation.Instances.map((instance) => {
                        let newInstance = camelizeKeys(instance);
                        const name = newInstance.tags.find(t => t.key === 'Name').value;
                        return {name, region: r.region, ...newInstance };
                    });
                });
                return flatten(results);
            });
            const allInstances = flatten(instances);
            return Promise.resolve(allInstances);
        });
}
