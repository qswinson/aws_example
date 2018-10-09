const defaultState = {
    prices: [
        { instanceType: 't2.micro', hourlyPrice: 0.0116, region: 'us-east-1' },
        { instanceType: 't2.small', hourlyPrice: 0.023, region: 'us-east-1' },
        { instanceType: 't2.medium', hourlyPrice: 0.0464, region: 'us-east-1' },
        { instanceType: 'm3.large', hourlyPrice: 0.133, region: 'us-east-1' },
        { instanceType: 'c5.large', hourlyPrice: 0.085, region: 'us-east-1' },
        { instanceType: 'c5.xlarge', hourlyPrice: 0.17, region: 'us-east-1' },

        { instanceType: 't2.micro', hourlyPrice: 0.0126, region: 'eu-west-1' },
        { instanceType: 't2.small', hourlyPrice: 0.025, region: 'eu-west-1' },
        { instanceType: 't2.medium', hourlyPrice: 0.05, region: 'eu-west-1' },
        { instanceType: 'c5.large', hourlyPrice: 0.096, region: 'eu-west-1' },
        { instanceType: 'c5.xlarge', hourlyPrice: 0.192, region: 'eu-west-1' },

        { instanceType: 't2.micro', hourlyPrice: 0.0134, region: 'eu-central-1' },
        { instanceType: 't2.small', hourlyPrice: 0.0268, region: 'eu-central-1' },
        { instanceType: 't2.medium', hourlyPrice: 0.0536, region: 'eu-central-1' },
        { instanceType: 'c5.large', hourlyPrice: 0.097, region: 'eu-central-1' },
        { instanceType: 'c5.xlarge', hourlyPrice: 0.194, region: 'eu-central-1' },

        { instanceType: 't2.micro', hourlyPrice: 0.0146, region: 'ap-southeast-1' },
        { instanceType: 't2.small', hourlyPrice: 0.0292, region: 'ap-southeast-1' },
        { instanceType: 't2.medium', hourlyPrice: 0.0584, region: 'ap-southeast-1' },
        { instanceType: 'c5.large', hourlyPrice: 0.098, region: 'ap-southeast-1' },
        { instanceType: 'c5.xlarge', hourlyPrice: 0.196, region: 'ap-southeast-1' },

        { instanceType: 't2.micro', hourlyPrice: 0.0146, region: 'ap-southeast-2' },
        { instanceType: 't2.small', hourlyPrice: 0.0292, region: 'ap-southeast-2' },
        { instanceType: 't2.medium', hourlyPrice: 0.0584, region: 'ap-southeast-2' },
        { instanceType: 'c5.large', hourlyPrice: 0.111, region: 'ap-southeast-2' },
        { instanceType: 'c5.xlarge', hourlyPrice: 0.222, region: 'ap-southeast-2' },

    ]
 };

export default function ec2Cost(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
