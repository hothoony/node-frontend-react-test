import { useEffect, useState } from "react";
import { verifyLicenseKey } from "../utils/rsa-util-temp";

function Home() {

    const [validData, setValidData] = useState();

    useEffect(() => {

        console.log('Home loaded');

        // 사용 예시
        (async () => {

            const licenseData = {
                user: 'John Doe',
                licenseType: 'Pro',
                expirationDate: '2024-12-31',
            };
            console.log('licenseData = ', licenseData);

            // 서버에서 받은 서명된 라이센스 키(Base64)
            // const licenseKey = '받은_라이센스_키';
            const licenseKey = 'T/SiQxO/2ZH77GWDx/paO6z4TreKfd4blmYUER4D+mqxCM3G0OE+/sov8MccNDbsr9UHHNFvJBIQOmcs/hgHWKL9Zz829605Zc6qdalszX4GTnYbVhG5s94X9gUK1UWtlxCmjw13DcN3Goq60bvDGZDR59KmYS50dBXPZ1JrZklWb0DxLrn8ZoDaU6Szcaoq41YtajlyBZMs9/K5o+m2rHl6f/P/t7YgWF0b6fbtVZ07G2QxNTO3zlvtyWqcFAo3toWZsq+DkC97/Cb/qV3q19PUAfhn9bJDvxjJFjKe98Hk+kTamuTbli3gkDNtkqdGfOuGFLoTBnXIJDf0fFnKjw==';
            console.log('licenseKey = ', licenseKey);
            
            const publicKeyBase64 = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7dW9e6FCyamfihjoRpprMaiqVrY5Um3GEqKimnDZyR5g9mq+hk1aI2LnwXxBSiQ0FUzSpdZlHNKJccLN8ds+7oirFebwPXfFvYqaP0wxB+MHmEiV1mwmFxNkFhdOJtiYYyCD98MQh1+TtJAXiOsedqM+CzN7wi5F1DeS019BrLrHZMSixpe+35Pc5CJAv1wd948zP1y4S/QHAVT/uziNQiqgjsB+YPqvn2ryLYsfGJ184JtuLdJH2i9JlywbAO1JBNPXjqJxTVzIjBSkRBIYdHS0UmyZRV7vZuRBw+0tEdqz1KsxTJOdxBdcyK5GMCEct71hz1mbjKA0JdghoJUqeQIDAQAB';
            console.log('publicKeyBase64 = ', publicKeyBase64);

            const isValid = await verifyLicenseKey(
                licenseData,
                licenseKey,
                publicKeyBase64
            );
            console.log('Is License Key Valid?:', isValid);
            setValidData(isValid ? 1 : 0);

        })();

    }, []);

    return (
        <div>
            <p>
                Home
            </p>
            <p>
                RSA Signature Verify
            </p>
            <p>
                validData = {validData}
            </p>
        </div>
    );
}

export default Home;
