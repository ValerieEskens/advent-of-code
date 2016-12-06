let doorId: string = "abbhdwsy";
let i = 0;

function getPasswordCharacter(doorId: string): Object {
    let hashed = md5(doorId + i);
    while (hashed.substr(0, 5) !== "00000") {
        hashed = md5(doorId + i);
        i++;
    }
    i++;
    return {
        pos5: hashed.substr(5, 1),
        pos6: hashed.substr(6, 1)
    }
}

function getPassword1(doorId: string): string {
    let password: string = "";
    i = 0;
    while (password.length < 8) {
        password += getPasswordCharacter(doorId).pos5;
    }
    return password;
}

function getPassword2(doorId: string): string {
    let password: Array<string> = ["_", "_", "_", "_", "_", "_", "_", "_"];
    i = 0;
    while (password.indexOf("_") !== -1) {
        let passwordPart: Object = getPasswordCharacter(doorId);
        if (password[passwordPart.pos5] === "_") {
            password[passwordPart.pos5] = passwordPart.pos6;
        }
    }
    return password.toString().replace(/\,/g, "");
}

console.log("password 1", getPassword1(doorId));
console.log("password 2", getPassword2(doorId));
