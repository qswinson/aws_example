import { GET_API }          from '../../middleware/api';
import { getCredentials }   from '../auth/actions';
import EC2INSTANCE          from './actionTypes';
//import { getEc2Instance }   from './selectors';
import * as api             from './api';

// function fetchEc2Instance(instanceId, region, credentials) {
//     return {
//         [GET_API]: {
//             types: [EC2INSTANCE.REQUEST_EC2INSTANCE, EC2INSTANCE.REQUEST_EC2INSTANCE_SUCCESS, EC2INSTANCE.REQUEST_EC2INSTANCE_ERROR],
//             endpoint: api.ec2Instance(instanceId),
//             credentials
//         }
//     };
// }

// export function loadEc2Instance(instanceId, region) {
//     return (dispatch, getState) => {
//         const credentials = dispatch(getCredentials());
//         return dispatch(fetchEc2Instance(instanceId, region, credentials))
//             .then((result) => {
//                 if (result.type === EC2INSTANCE.REQUEST_EC2INSTANCE_SUCCESS) {
//                     if (!getEc2Instance(getState(), instanceId)) {
//                         // need to go to not found page
//                     }
//                 }
//             })
//     }
// }

function fetchAllEc2Instances(credentials) {
    return {
        [GET_API]: {
            types: [EC2INSTANCE.REQUEST_ALL_EC2INSTANCES, EC2INSTANCE.REQUEST_ALL_EC2INSTANCES_SUCCESS, EC2INSTANCE.REQUEST_ALL_EC2INSTANCES_ERROR],
            endpoint: api.fetchAllEc2Instances,
            credentials
        }
    };
}

export function loadAllEc2Instances() {
    return (dispatch, getState) => {
        return dispatch(getCredentials())
            .then((credentials) => {
                return dispatch(fetchAllEc2Instances(credentials));
            });
    }
}

export function selectEC2Instance(selectedInstanceId) {
    return (dispatch) => {
        return dispatch({ type: EC2INSTANCE.SELECT_EC2_INSTANCE, selectedInstanceId });
    }
}
