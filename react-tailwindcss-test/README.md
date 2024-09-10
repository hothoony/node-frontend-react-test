
## 프로젝트 생성
```bash
npx create-react-app react-tailwindcss-test
```

<br>

## 패키지 설치
```bash
yarn add tailwindcss
# yarn add postcss
# yarn add autoprefixer
```

- `TailwindCSS` 는 내부적으로 PostCSS를 사용하여 스타일을 생성합니다.
- `PostCSS` 는 TailwindCSS를 사용하기 위해 필수입니다.
- `Autoprefixer` 는 필수는 아니지만, 크로스 브라우저 호환성을 고려한다면 사용하는 것이 좋습니다.

<br>

## tailwind.config.js 파일 생성
```bas성
$ npx tailwindcss init

Created Tailwind CSS config file: tailwind.config.js
```

### tailwind.config.js & postcss.config.js 파일 생성
- `-p` 옵션을 추가
```bash
$ npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
```

### tailwind.config.js 파일 수정
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 추가
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br>

## tailwindcss 사용하기

### `src/css/tailwind.css` 파일 생성
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `index.js` 에 tailwind.css 추가
```javascript
import './css/tailwind.css';
```

### `App.js` 에 tailwindcss 적용하기
- className 에 클래스명을 적용한다
```javascript
<div className='text-8xl text-red-600'>
    tailwindcss
</div>
```
