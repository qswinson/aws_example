import AUTH  from './actionTypes';

const defaultState = { idToken: null, expiresAt: null, accessKeyId: null, secretAccessKey: null };

export default function auth(state = defaultState, action) {
    switch (action.type) {
        case AUTH.HANDLE_AUTHENTICATION_SUCCESS:
            const accessKeyId = action.response.results.profile['https://example.com/aws_access_key_id'];
            const secretAccessKey = action.response.results.profile['https://example.com/aws_secret_access_key']
            return { ...state, idToken: action.response.results.idToken, expiresAt: action.response.results.expiresAt, accessKeyId, secretAccessKey };
        case AUTH.LOGOUT:
            return { ...state, ...defaultState };
        default:
            return state;
    }
}
