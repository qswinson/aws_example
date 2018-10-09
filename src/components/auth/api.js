import auth0 from "auth0-js";

function init() {
    const api = new auth0.WebAuth({
        // the following three lines MUST be updated
        domain: "quenbymitchell.auth0.com",
        audience: "https://quenbymitchell.auth0.com/userinfo",
        clientID: "8pfpz_Siqwnm_P8Is2XNu1hHJ7PYJPj9",
        redirectUri: "http://localhost:3000/callback",
        responseType: "token id_token",
        scope: "openid profile"
    });
    return api;
}

export function handleAuthentication() {
    const api = init();
    return new Promise((resolve, reject) => {
        api.parseHash((err, authResult) => {
            if (err) {
                return reject(err);
            }
            console.log(authResult);
            if (!authResult || !authResult.idToken) {
                return reject(err);
            }
            const result = {
                idToken: authResult.idToken,
                profile: authResult.idTokenPayload,
                expiresAt: authResult.expiresIn * 1000 + new Date().getTime()
            };
            resolve(result);
        });
    });
}

export function login() {
    const api = init();
    api.authorize();
}
