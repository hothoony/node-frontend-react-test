import React from "react";
import Parent2 from "./Parent2";

const Test2 = () => {

    const styles = {
        box: {
            border: '1px solid black',
            padding: '0 20px 20px',
        }
    };

    return (
        <div style={styles.box}>
            <h2>Test2</h2>
            <p>
                Parent 와 Child 컴포넌트 간에 데이터 전달<br/>
                데이터를 Child 에 정의
            </p>
            <Parent2 />
        </div>
    );
}

export default Test2;
