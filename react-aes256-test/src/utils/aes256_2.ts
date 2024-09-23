import CryptoJS from 'crypto-js';

const secretKey = 'nwjnt3gm4tjQXGd9w0hngSDBXXsAT9U8GcBObVA8NsY=';
const iv = 'ZSnm22ERRX7rbT4FtYwfdQ==';

const secretKeyHex = CryptoJS.enc.Base64.parse(secretKey).toString(CryptoJS.enc.Hex);
const ivHex = CryptoJS.enc.Base64.parse(iv).toString(CryptoJS.enc.Hex);

// 암호화
export function aes_encrypt(text: string): string {
    const key = CryptoJS.enc.Hex.parse(secretKeyHex);
    const iv = CryptoJS.enc.Hex.parse(ivHex);

    const encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv });
    return encrypted.toString();
};

// 복호화
export function aes_decrypt(ciphertext: string): string {
  const key = CryptoJS.enc.Hex.parse(secretKeyHex);
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  
  const decrypted = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
