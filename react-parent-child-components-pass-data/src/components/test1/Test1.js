import React from "react";
import Parent from "./Parent";

const Test1 = () => {
    return (
        <div>
            <h2>Test1</h2>
            Parent 와 Child 컴포넌트 간에 데이터 전달
            <Parent />
        </div>
    );
}

export default Test1;
