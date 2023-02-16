import styled from "styled-components";

// 대문자로 시작해야 적용됨
// MyStyleDiv => O
// myStyleDiv => X
const MyStyleDiv = styled.div`
    color: orange;
    font-size: 40px;
`;


const CSS05 = () => {
    return (
        <MyStyleDiv>
            styled components
        </MyStyleDiv>
    );
}

export default CSS05;
