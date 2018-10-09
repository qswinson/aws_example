// import { camelizeKeys } from 'humps';
import { isFunction } from 'lodash';
// import 'isomorphic-fetch';


// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(apiMethod, credentials) {

  return apiMethod(credentials)
    .then((results) => {
      return {
        loadInProgress: false,
        success: true,
        results
      };
    });
}

function validateParameters(apiCall, types) {
  if (!isFunction(apiCall)) {
    throw new Error('Specify a function api call.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }
}

// Action key that carries API call info interpreted by this Redux middleware.
export const GET_API = Symbol('GET API');

// A Redux middleware that interprets actions with GET_API info specified.
// Performs the call and promises when such actions are dispatched.
export const getAPI = store => next => (action) => {
  const getActionAPI = action[GET_API];
  if (typeof getActionAPI === 'undefined') {
    return next(action);
  }

  let { apiCall } = getActionAPI;
  const { credentials, types } = getActionAPI;

  validateParameters(apiCall, types);

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[GET_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType, loadInProgress: true }));

  return callApi(apiCall, credentials).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || error.error || 'Something bad happened',
      loadInProgress: false
    }))
  );
};
