// action type 을 정의한다
export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';
export const COUNT_RESET = 'COUNT_RESET';

// action 객체를 반환하는 action creator 함수를 정의한다
export const countUp = () => {
    console.log('');
    console.log('countAction.countUp');
    return {
        type: COUNT_UP,
    };
}

export const countDown = () => {
    console.log('');
    console.log('countAction.countDown');
    return {
        type: COUNT_DOWN,
    };
}

export const countUpBy = (state) => {
    console.log('');
    console.log('countAction.countUpBy', state);
    return {
        type: COUNT_UP,
        step: state.step,
    };
}

export const countDownBy = (state) => {
    console.log('');
    console.log('countAction.countDownBy', state);
    return {
        type: COUNT_DOWN,
        step: state.step,
    };
}

export const countReset = () => {
    console.log('');
    console.log('countAction.countReset');
    return {
        type: COUNT_RESET,
    }
}
