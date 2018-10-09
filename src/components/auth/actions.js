import { GET_API }          from '../../middleware/api';
import AUTH                 from './actionTypes';
import * as api             from './api';

export function getCredentials() {
    return (dispatch, getState) => {
        const auth = getState().auth;

        if (!auth.idToken) {
            return Promise.resolve(null);
        }

        return Promise.resolve({ region: 'us-east-1', accessKeyId: auth.accessKeyId, secretAccessKey: auth.secretAccessKey });
    }
}

export function login() {
    return (dispatch) => {
        return dispatch(api.login());
    }
}

function handleAuthentication() {
    return {
        [GET_API]: {
            types: [AUTH.HANDLE_AUTHENTICATION, AUTH.HANDLE_AUTHENTICATION_SUCCESS, AUTH.HANDLE_AUTHENTICATION_ERROR],
            apiCall: api.handleAuthentication
        }
    };
}

export function authenticate(history) {
    return (dispatch) => {
        return dispatch(handleAuthentication())
            .then(() => {
                history.push('/');
            });
    }
}

export function logout() {
    return (dispatch) => {
        dispatch({ type: AUTH.LOGOUT });
    }
}
