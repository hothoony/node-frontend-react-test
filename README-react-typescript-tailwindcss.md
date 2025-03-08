## 프로젝트 생성하기 (react + typescript + tailwindcss)
```shell
# 프로젝트 생성하기
# npm init vite@latest my-project -- --template react-ts
npx create-react-app my-project --template typescript

# 의존성 설치
cd my-project
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js 파일 수정
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // 추가
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## index.css 파일 수정
```css
/* 파일 상단에 추가 */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## tailwindcss 버튼 추가하고 프로젝트 실행
```typescript
// App.tsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    tailwindcss Button
</button>
```
```shell
yarn start
```
