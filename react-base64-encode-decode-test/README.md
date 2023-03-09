# Base64 인코딩

```shell
$ npm install buffer
```

```javascript
import { Buffer } from 'buffer';

const exampleStr = 'abc';

// encode
const encodedStr = Buffer.from(exampleStr, 'utf8').toString('base64');

// decode
const decodedStr = Buffer.from(encodedStr, 'base64').toString('utf8');
```
