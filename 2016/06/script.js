var doorId = "abbhdwsy";
var i = 0;
function getPasswordCharacter(doorId) {
    var hashed = md5(doorId + i);
    while (hashed.substr(0, 5) !== "00000") {
        hashed = md5(doorId + i);
        i++;
    }
    i++;
    var toReturn = {
        position: hashed.substr(5, 1),
        character: hashed.substr(6, 1)
    };
    return toReturn;
}
function getPassword1(doorId) {
    var password = "";
    i = 0;
    while (password.length < 8) {
        password += getPasswordCharacter(doorId);
    }
    return password;
}
function getPassword2(doorId) {
    var password = ["_", "_", "_", "_", "_", "_", "_", "_"];
    i = 0;
    while (password.indexOf("_") !== -1) {
        var passwordPart = getPasswordCharacter(doorId);
        if (password[passwordPart.position] === "_") {
            password[passwordPart.position] = passwordPart.character;
        }
        return password.toString().replace(/\,/g, "");
    }
}
console.log("password 1", getPassword1(doorId));
console.log("password 2", getPassword2(doorId));
