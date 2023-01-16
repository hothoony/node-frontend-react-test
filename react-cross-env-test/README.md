# cross-env

## cross-env & env-cmd 설치
```bash
## cross-env 설치
npm install cross-env

## env-cmd 설치
npm install env-cmd
```
## 환경설정 파일 생성

### 개발환경 `.env.development`
- package.json 파일과 같은 폴더에 만든다
```bash
# .env.development

# 'REACT_APP_' prefix 를 붙여줘야 한다
REACT_APP_backend_url=http://development
```

### 운영환경 `.env.production`
- package.json 파일과 같은 폴더에 만든다
```bash
# .env.production

# 'REACT_APP_' prefix 를 붙여줘야 한다
REACT_APP_backend_url=http://production
```

## 소스 코드에서 환경변수 사용
- `{process.env.REACT_APP_backend_url}`
```javascript
const EnvView = () => {
    return (
        <div>
            <h1>backend_url = {process.env.REACT_APP_backend_url}</h1>
        </div>
    );
}
```

## `package.json` 파일 수정
- `env-cmd -f .env.환경파일` 추가
```
  "scripts": {
    "start": "env-cmd -f .env.development react-scripts start",
    "build": "env-cmd -f .env.production react-scripts build",
  },
```

## 개발환경 변수 적용 확인
- `yarn start`

## 운영환경 변수 적용 확인
- `yarn build`
- `build` 폴더를 `serve` 로 실행
```bash
## serve 설치
npm install serve

## serve 로 build 폴더 실행
npx serve -s build
```
