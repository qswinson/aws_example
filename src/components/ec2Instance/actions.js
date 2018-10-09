import { GET_API }          from '../../middleware/api';
import { getCredentials }   from '../auth/actions';
import EC2INSTANCE          from './actionTypes';
import * as api             from './api';

function fetchAllEc2Instances(credentials) {
    return {
        [GET_API]: {
            types: [EC2INSTANCE.REQUEST_ALL_EC2INSTANCES, EC2INSTANCE.REQUEST_ALL_EC2INSTANCES_SUCCESS, EC2INSTANCE.REQUEST_ALL_EC2INSTANCES_ERROR],
            apiCall: api.fetchAllEc2Instances,
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
