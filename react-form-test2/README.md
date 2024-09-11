
## 프로젝트 생성
```bash
npx create-react-app react-form-test2 --template typescript
```

## react 에서 form 만드는 방법
1. state 와 handler 를 사용
   - 기본적인 사용방법
2. Ref 를 사용
   - 입력값 초기화가 어렵다
3. FormData 와 브라우저 API 사용
   ```javascript
   const formData = new FormData(event.target);
   ```
4. custom hook 을 사용
5. React Forms Library 를 사용
   - react hook form
   - formik

## react type 확인
- global.d.ts 파일에 정의되어 있다
```bash
node_modules > @types > react > global.d.ts
```

## HTMLElement
```javascript
event.target as HTMLInputElement

HTMLFormElement
HTMLInputElement
HTMLSelectElement
```
