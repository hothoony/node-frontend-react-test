import CryptoJS from 'crypto-js';

const secretKey = 'nwjnt3gm4tjQXGd9w0hngSDBXXsAT9U8GcBObVA8NsY=';
const iv = 'n9r616W2sWxwtj3t123456';

// AES-256 암호화 함수
export function aes_encrypt(data: string): string {
  const encrypted = CryptoJS.AES.encrypt(data, 
    CryptoJS.enc.Utf8.parse(secretKey), 
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  return encrypted.toString(); // Base64로 인코딩된 암호문 반환
}

// AES-256 복호화 함수
export function aes_decrypt(encryptedData: string): string {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, 
    CryptoJS.enc.Utf8.parse(secretKey), 
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
