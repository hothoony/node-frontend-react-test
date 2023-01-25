// action type 정의
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

// action creator 함수 정의
export const login = (formData) => {
    console.log('loginAction login', formData);
    return {
        type: LOG_IN,
        ...formData,
    };
}

// action creator 함수 정의
export const logout = () => {
    console.log('loginAction logout');
    return {
        type: LOG_OUT,
        isLogin: false,
    };
}
