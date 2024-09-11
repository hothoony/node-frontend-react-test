import { useEffect } from "react";
import { aes_encrypt, aes_decrypt } from "../utils/aes256";

export default function Aes256TestPage() {

    useEffect(() => {
        console.log('');
        console.log('## Aes256TestPage useEffect');

        const plainText = 'Hello, World!';
        console.log('plainText =', plainText);
        
        const encrypted = aes_encrypt(plainText);
        console.log('encrypted =', encrypted);

        const decrypted = aes_decrypt(encrypted);
        console.log('decrypted =', decrypted);

    }, []);

    return (
        <div>
            Aes256TestPage
        </div>
    );
}
