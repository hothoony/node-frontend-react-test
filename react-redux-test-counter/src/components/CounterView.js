import { useSelector } from "react-redux";

function CounterView() {

    const state = useSelector(store => store.count);
    const { count } = state;

    return (
        <div>
            <h2>CounterView</h2>
            <div>
                count = {count}
            </div>
        </div>
    );
}

export default CounterView;
