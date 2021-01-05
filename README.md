# @innet/portal
[![NPM](https://img.shields.io/npm/v/@innet/portal.svg)](https://github.com/d8corp/innet-portal/blob/master/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/@innet/portal.svg)](https://www.npmjs.com/package/@innet/portal)
[![license](https://img.shields.io/npm/l/@innet/portal)](https://github.com/d8corp/innet-portal/blob/master/LICENSE)  
This plugin helps to render a content into separate HTML Element.

### Installation
npm
```bash
npm i @innet/portal
```
yarn
```bash
yarn add @innet/portal
```

Or just download a minified js file
[here](https://github.com/d8corp/innet-portal/blob/master/lib/innet-portal.min.js)

### Using
```typescript jsx
import innet from 'innet'
import portal from '@innet/portal'

const div = document.createElement('div')

innet((
  <div>
    test1
    <portal parent={div}>
      test2
    </portal>
  </div>
), undefined, {portal})

console.log(div.innerHTML)
// test2
```

### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-portal/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-portal)](https://github.com/d8corp/innet-portal/issues)
> ---
[![stars](https://img.shields.io/github/stars/d8corp/innet-portal?style=social)](https://github.com/d8corp/innet-portal/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-portal?style=social)](https://github.com/d8corp/innet-portal/watchers)
