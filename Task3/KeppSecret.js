/*
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
getSecret() which returns the secret 
setSecret() which sets the secret	


*/

function createSecretHolder(current_secret) {
    var secret = current_secret;
    var secretHolder = {
        getSecret: function () { return secret },
        setSecret: function (secretnow) { secret = current_secret }
    }
    return secretHolder;
}