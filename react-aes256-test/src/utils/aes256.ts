import CryptoJS from 'crypto-js';

const secretKey = 'nwjnt3gm4tjQXGd9w0hngSDBXXsAT9U8GcBObVA8NsY=';
const iv = 'n9r616W2sWxwtj3t123456';

// export function aes_encrypt(data: string): string {
//   const encrypted = CryptoJS.AES.encrypt(data, 
//     CryptoJS.enc.Utf8.parse(secretKey), 
//     {
//       iv: CryptoJS.enc.Utf8.parse(iv),
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     });
//   return encrypted.toString();
// }

// export function aes_decrypt(encryptedData: string): string {
//   const decrypted = CryptoJS.AES.decrypt(encryptedData, 
//     CryptoJS.enc.Utf8.parse(secretKey), 
//     {
//       iv: CryptoJS.enc.Utf8.parse(iv),
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     });
//   return decrypted.toString(CryptoJS.enc.Utf8);
// }

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
