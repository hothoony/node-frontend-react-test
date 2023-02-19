import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atomTodoState";

const TodoItemCreator = () => {

    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const inputRef = useRef(null);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ]);
        setInputValue('');
        
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    }

    return (
        <div>
            <h2>TodoItemCreator</h2>
            <input type="text" ref={inputRef} value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>
    );
}

let id = 0;
const getId = () => {
    return id++;
}

export default TodoItemCreator;
