# react i18n 적용

## 패키지 설치
```bash
npm install react-i18next
npm install i18next
```

## 메시지 파일 만들기
- ### ko `src/locale/lang/ko.json`
```javascript
// src/locale/lang/ko.json
{
    "greeting": "안녕하세요"
}
```
- ### en
```javascript
// src/locale/lang/en.json
{
    "greeting": "Hello"
}
```

## i18n-config.js 만들기
```javascript
// src/locale/i18n-config.js

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translation_ko from './lang/ko.json';
import translation_en from './lang/en.json';

const resources = {
    ko: { translation: translation_ko },
    en: { translation: translation_en },
};

i18next
    .use(initReactI18next)
    .init({
        resources: resources,
        // lng: process.env.REACT_APP_LANGUAGE,
        lng: 'ko',
        // lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        debug: true,
    });

export default i18next;
```

## App.js 에서 `i18n-config` 임포트
```javascript
// App.js

import './locale/i18n-config';
```

## Greeting.js 에서 메시지 적용
- `{t('greeting')}`
```jsx
import { useState } from 'react';
// 임포트 추가
import { useTranslation } from 'react-i18next';

const Greeting = () => {

    const [ lang, setLang ] = useState('ko');
    
    // 변수 선언
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const handleChange = e => {
        setLang(e.target.value);
        // 언어 변경
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div>
            <div>
                <select onChange={handleChange}>
                    <option value="ko">ko</option>
                    <option value="en">en</option>
                </select>
                <div>
                    현재 언어 : {lang}
                </div>
            </div>
            <div>
                // 메시지 출력
                <h1>{t('greeting')}</h1>
            </div>
        </div>
    );
}

export default Greeting;
```
