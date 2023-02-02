## react 프로젝트 생성
```shell
$ npx create-react-app react-styled-components-test
```

## styled-components 라이브러리 설치
```shell
$ npm install styled-components
```

## 컴포넌트 스타일링
- MyButtonA.js
```javascript
// src/components/MyButtonA.js

import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 25px;

    color: ${(props) => props.color || 'black'};
    background: ${props => props.background || 'gray'};
`;

function MyButtonA({ children, color, background }) {
    return (
        <StyledButton color={color} background={background}>
            {children}
        </StyledButton>
    );
}

export default MyButtonA;
```
- MyButtonB.js
```javascript
// src/components/MyButtonB.js

import styled, { css } from "styled-components";

const StyledButton = styled.button`
    font-size: 30px;

    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'gray'};

    ${(props) => 
        props.primary &&
        css`
            color: white;
            background: blue;
        `
    }

    ${(props) => 
        props.secondary &&
        css`
            color: yellow;
            background: green;
        `
    }
`;

function MyButtonB({ children, ...props }) {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}

export default MyButtonB;
```

## 스타일링한 컴포넌트 사용
```javascript
// src/components/StyledComponentsTest.js

import MyButtonA from "./MyButtonA";
import MyButtonB from "./MyButtonB";

function StyledComponentsTest() {
    return (
        <>
            <h2>StyledComponentsTest</h2>
            <div>
                <h3>MyButtonA</h3>
                <div>
                    <MyButtonA>MyButtonA 1</MyButtonA>
                    <MyButtonA color={'red'}>MyButtonA 2</MyButtonA>
                    <MyButtonA background={'blue'}>MyButtonA 3</MyButtonA>
                    <MyButtonA color={'yellow'} background={'green'}>MyButtonA 4</MyButtonA>
                </div>
            </div>
            <div>
                <h3>MyButtonB</h3>
                <div>
                    <MyButtonB>MyButtonB 1</MyButtonB>
                    <MyButtonB color={'red'}>MyButtonB 2</MyButtonB>
                    <MyButtonB background={'blue'}>MyButtonB 3</MyButtonB>
                    <MyButtonB color={'yellow'} background={'green'}>MyButtonB 4</MyButtonB>
                </div>
                <div>
                    <MyButtonB primary>MyButtonB primary</MyButtonB>
                    <MyButtonB secondary>MyButtonB secondary</MyButtonB>
                </div>
            </div>
        </>
    );
}

export default StyledComponentsTest;
```
