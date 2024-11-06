import { useEffect, useState } from "react";
import { verifyLicenseKey } from "../utils/rsa-util-temp";

function Home() {

    const [validData, setValidData] = useState();

    useEffect(() => {

        console.log('Home loaded');

        // 사용 예시
        (async () => {

            const licenseData = {"company":"아이엔지피플","companyCode":"12-232323-34","licenseType":"NORMAL","startDate":"20241106","expirationDate":"20251106"};
            console.log('licenseData = ', licenseData);

            // 서버에서 받은 서명된 라이센스 키(Base64)
            // const licenseKey = '받은_라이센스_키';
            const licenseKey = 'G0JXep12K3JAqjYMykNCe/ERwLu0iOtmaNSLbnEacocXrK//wAeT9JRPj7U2oU+sJjEoFeZRsIesgp+SMGgl6PhQw8+xpDPo5AeXJemilv3wPc/0SwyHVrz3Zj0NXJTlweVzCa62p1R9dBEvs3Z+YX947Q3r20oxht5sTe7kLTrasxWN/R06y2ab/jNWDSlVxZnS5VUU27QGnNs9536lNxIE74aL1xbMuJDrLA4f4/k/tANi1tHRiyxdeHNMk9cSzyhYmHKIy0lwyIAeQUiDQTQGFgi0K4Cmw57bQP/vyO++IME7iwk6DEIKDuYcNhWA42YWtTVt7XTMKhrR5P3xyQ==';
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
