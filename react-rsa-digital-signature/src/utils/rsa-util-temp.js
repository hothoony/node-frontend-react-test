const crypto = require('crypto');

// RSA 공개 키 가져오기 및 Base64 디코딩 함수
async function importPublicKey(publicKeyBase64) {
  const publicKeyPem = publicKeyBase64.replace(
    /-----BEGIN PUBLIC KEY-----|-----END PUBLIC KEY-----|\n/g,
    ''
  );

  const publicKeyBinary = Uint8Array.from(atob(publicKeyPem), (c) =>
    c.charCodeAt(0)
  );

  return crypto.subtle.importKey(
    'spki',
    publicKeyBinary.buffer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['verify']
  );
}

// 서명을 Base64 형식에서 Uint8Array로 변환
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// 라이센스 검증 함수
async function verifyLicenseKey(data, licenseKey, publicKeyBase64) {
  const publicKey = await importPublicKey(publicKeyBase64);

  // 라이센스 데이터를 Uint8Array 형식으로 변환
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(JSON.stringify(data));

  // 서명을 Uint8Array 형식으로 변환
  const signature = base64ToUint8Array(licenseKey);

  // 서명 검증
  const isValid = await crypto.subtle.verify(
    {
      name: 'RSASSA-PKCS1-v1_5',
    },
    publicKey,
    signature,
    encodedData
  );

  return isValid;
}

module.exports = {
  importPublicKey,
  base64ToUint8Array,
  verifyLicenseKey,
};

// -----------------------------------------------------------------------

// // 사용 예시
// (async () => {

//   const licenseData = {
//     user: 'John Doe',
//     licenseType: 'Pro',
//     expirationDate: '2024-12-31',
//   };

//   // 서버에서 받은 서명된 라이센스 키(Base64)
//   const licenseKey = '받은_라이센스_키';

//   const isValid = await verifyLicenseKey(
//     licenseData,
//     licenseKey,
//     publicKeyBase64
//   );
//   console.log('Is License Key Valid?:', isValid);

// })();
