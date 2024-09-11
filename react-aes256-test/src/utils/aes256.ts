import CryptoJS from 'crypto-js';

// AES-256은 256비트(32바이트) 키를 요구합니다. 
// 따라서 암호화 및 복호화에 사용되는 키의 길이가 32바이트인지 확인하는 것이 중요합니다. 
// 코드에서 secretKey가 정확히 32바이트인지 확인해야 합니다.
// secretKey 길이는 256비트(32바이트) 로 설정
const secretKey = 'your-secret-key';

export const aes_encrypt = (plainText: string): string => {
  return CryptoJS.AES.encrypt(plainText, secretKey).toString();
};

export const aes_decrypt = (encrypted: string): string => {
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
