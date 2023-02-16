## styled-components 라이브러리 설치
```shell
$ npm install styled-components
```

## CSS 적용 방법

1. ### inline style
    - `style={{ }}` 을 사용한다
    ```javascript
    <div style={{
        color: 'red',
        fontSize: '40px',
    }}>
        inline style
    </div>
    ```

1. ### global style
    - `src` 폴더 하위에 css 파일을 별도로 만든다
    - `js` 파일에서 css 파일을 임포트해서 사용한다
    ```css
    /* src/css/globalStyle.css */

    .globalStyle {
        color: blue;
        font-size: 40px;
    }
    ```
    ```javascript
    // src/components/css02/CSS02-global-style.js

    import '../../css/globalStyle.css';

    const CSS02 = () => {
        return (
            <div className="globalStyle">
                global style
            </div>
        );
    }
    ```

1. ### CSS Module
    - `컴포넌트명.module.css` 파일명으로 css 파일을 별도로 만든다.
    - `js` 파일에서 css 파일을 임포트해서 사용한다
    ```css
    /* src/css04/CSS04.module.css */

    .cssModuleStyle {
        color: green;
        font-size: 40px;
    }
    ```
    ```javascript
    // src/css04/CSS04-css-module.js

    import styles from './CSS04.module.css';

    const CSS04 = () => {
        return (
            <div className={styles.cssModuleStyle}>
                CSS Module
            </div>
        );
    }
    ```

1. ### styled components
    - `js` 파일 안에 `styled` 를 이용해서 스타일을 정의한다.
    - 이때 변수명은 대문자로 시작해야 한다
    - `styled` 로 정의한 변수를 사용한다
    ```javascript
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
    ```
