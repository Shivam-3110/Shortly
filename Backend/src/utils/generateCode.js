import crypto from "crypto"

function generateCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let ShortCode = "";

    for (let i = 0; i < length; i++) {
        code += chars[crypto.randomInt(0, chars.length)];
    }

    return ShortCode;
}

export default generateCode;
