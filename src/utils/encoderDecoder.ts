import CryptoJS from "crypto-js";

const SECRET_ENCRYPT_KEY = process.env.NEXT_PUBLIC_SECRET_ENCRYPT_KEY;

export function encodeString(originalString: string): string {
    if (!SECRET_ENCRYPT_KEY) {
        throw new Error("SECRET_ENCRYPT_KEY is not defined");
    }

    const encrypted = CryptoJS.AES.encrypt(
        originalString,
        SECRET_ENCRYPT_KEY,
    ).toString();

    return encodeURIComponent(encrypted.toString());
}

export function decodeString(encodedString: string): string {
    if (!SECRET_ENCRYPT_KEY) {
        throw new Error("SECRET_ENCRYPT_KEY is not defined");
    }

    const decodedString = decodeURIComponent(encodedString);
    const decrypted = CryptoJS.AES.decrypt(decodedString, SECRET_ENCRYPT_KEY);
    return decrypted.toString(CryptoJS.enc.Utf8);
}
