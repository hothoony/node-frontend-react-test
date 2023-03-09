import React, { useEffect } from "react";
import { useState } from "react";
import { Buffer } from 'buffer';

const Base64UsingBuffer = () => {

    const [ str, setStr ] = useState('');
    const [ encodedStr, setEncodedStr ] = useState('');
    const [ decodedStr, setDecodedStr ] = useState('');

    const doEncodeDecode = () => {
        const encStr = Buffer.from(str, 'utf8').toString('base64');
        const decStr = Buffer.from(encStr, 'base64').toString('utf8');

        setEncodedStr(encStr);
        setDecodedStr(decStr);
    }

    const styles = {
        formLabel: {
            display: 'inline-block',
            width: '160px',
            textAlign: 'right',
            marginRight: '10px',
        }
    };

    useEffect(() => {
        setStr('base64 테스트_#1');
    }, []);

    return (
        <div>
            
            Base64UsingBuffer
            <div>
                <div>
                    <label>
                        <span style={styles.formLabel}>str</span>
                        <input type="text" value={str} size="42" onChange={e => setStr(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        <span style={styles.formLabel}>encodedStr</span>
                        <input type="text" value={encodedStr} size="42" onChange={e => setEncodedStr(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        <span style={styles.formLabel}>decodedStr</span>
                        <input type="text" value={decodedStr} size="42" onChange={e => setDecodedStr(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <button onClick={doEncodeDecode}>encode & decode</button>
                </div>
            </div>

        </div>
    );
}

export default Base64UsingBuffer;
