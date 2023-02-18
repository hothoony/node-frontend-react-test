import React from 'react';
import LoginStatus from './LoginStatus';

const SignIn = (props) => {

    const styles = {
        formLabel: {
            display: 'inline-block',
            width: '50px',
            fontSize: '20px',
        }
    };

    const onLogin = (e) => {
        console.log('onLogin');
    }

    const setLogin = () => {
        
    }

    return (
        <div>
            <h1>Sign-in</h1>
            <div>
                {props.message}
            </div>
            <div>
                <div>
                    <LoginStatus setLogin={setLogin}/>
                </div>
                <div>
                    <span style={styles.formLabel}>ID</span>
                    <input type="text"/>
                </div>
                <div>
                    <span style={styles.formLabel}>PW</span>
                    <input type="password"/>
                </div>
                <div>
                    <button type="submit" onClick={onLogin}>login</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
