# URL Parameter Parser

A TypeScript library for parsing parameters in a URL template string.

## Installation

```
npm i url-template-param-parser --save
```

## Usage

```typescript
import parseURLParams from 'url-template-param-parser';

const url = 'https://test.com:8080/user/:user_id/comment/:comment_id';
const result = parseURLParams(url);
console.log(result); // ['user_id', 'comment_id']
```


## Example

```typescript
import parseURLParams from 'url-template-param-parser';

const template = '/user/:user_id/comment/:comment_id';
const result = parseURLParams(template);
console.log(result); // ['user_id', 'comment_id']
```

## License

This library is licensed under the [MIT License](LICENSE).