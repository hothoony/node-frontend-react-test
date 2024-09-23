import CryptoJS from 'crypto-js';

const secretKey_base64 = 'nwjnt3gm4tjQXGd9w0hngSDBXXsAT9U8GcBObVA8NsY=';
const iv_base64 = 'ZSnm22ERRX7rbT4FtYwfdQ==';

export function aes_encrypt(data: string): string {

  const secretKey = CryptoJS.enc.Utf8.parse(secretKey_base64);
  const iv = CryptoJS.enc.Utf8.parse(iv_base64);
  // const secretKey = CryptoJS.enc.Base64.parse(secretKey_base64);
  // const iv = CryptoJS.enc.Base64.parse(iv_base64);

  const encrypted = CryptoJS.AES.encrypt(data, secretKey, 
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  return encrypted.toString();
}

export function aes_decrypt(encryptedData: string): string {

  const secretKey = CryptoJS.enc.Utf8.parse(secretKey_base64);
  const iv = CryptoJS.enc.Utf8.parse(iv_base64);
  // const secretKey = CryptoJS.enc.Base64.parse(secretKey_base64);
  // const iv = CryptoJS.enc.Base64.parse(iv_base64);
  
  const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey, 
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
