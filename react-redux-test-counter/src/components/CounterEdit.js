import { useDispatch } from "react-redux";
import { countDown, countDownBy, countReset, countUp, countUpBy } from "../redux/actions/countAction";

function CounterEdit() {

    const dispatch = useDispatch();

    const handleCountUp = () => {
        dispatch(countUp());
    }

    const handleCountDown = () => {
        dispatch(countDown());
    }

    const handleCountUpBy = () => {
        dispatch(countUpBy({step: 2}));
    }

    const handleCountDownBy = () => {
        dispatch(countDownBy({step: -2}));
    }

    const handleCountReset = () => {
        dispatch(countReset());
    }

    return (
        <div>
            <h2>CounterEdit</h2>
            <div>
                <button onClick={handleCountUp}>up</button>
                <button onClick={handleCountDown}>down</button>
            </div>
            <div>
                <button onClick={handleCountUpBy}>up by 2</button>
                <button onClick={handleCountDownBy}>down by -2</button>
            </div>
            <div>
            <button onClick={handleCountReset}>reset</button>
            </div>
        </div>
    );
}

export default CounterEdit;
