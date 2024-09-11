import CryptoJS from 'crypto-js';

// const secretKey = CryptoJS.enc.Utf8.parse('your-256-bit-secret-key'); // 256비트(32바이트)
// const iv = CryptoJS.enc.Utf8.parse('your-128-bit-iv'); // 128비트(16바이트)

// const secretKey = CryptoJS.enc.Utf8.parse('nwjnt3gm4tjQXGd9w0hngSDBXXsAT9U8GcBObVA8NsY=');
// const iv = CryptoJS.enc.Utf8.parse('n9r616W2sWxwtj3t');

const secretKey = 'nwjnt3gm4tjQXGd9w0hngSDBXXsAT9U8GcBObVA8NsY=';
const iv = 'n9r616W2sWxwtj3t';

console.log('secretKey =', secretKey);

export const aes_encrypt = (data: string): string => {
  const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

export const aes_decrypt = (encryptedData: string): string => {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
