## create project
```shell
# rm -rf my-project
npm init vite@latest my-project -- --template react-ts
cd my-project
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
