export function isLoggedIn(state) {
    return state.auth.idToken ? true : false;
}
