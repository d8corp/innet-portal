<img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">

# &nbsp; @innet/portal

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/portal.svg)](https://github.com/d8corp/innet-portal/blob/master/CHANGELOG.md)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@innet/portal)](https://bundlephobia.com/result?p=@innet/portal)
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

Or you can include the scripts into the `head`.
```html
<!-- Dependencies (watchState, innet) -->
<script defer src="https://unpkg.com/watch-state/watch-state.min.js"></script>
<script defer src="https://unpkg.com/innet/innet.min.js"></script>

<!-- Target (innetPortal) -->
<script defer src="https://unpkg.com/@innet/portal/innet-portal.min.js"></script>
```

### Using
Provide the plugin to `innet`
```typescript jsx
import innet from 'innet'
import portal from '@innet/portal'
import app from './app'

innet(app, undefined, {portal})
```
`app.tsx`
```typescript jsx
import innet from 'innet'

const div = document.createElement('div')

export default (
  <div>
    test1
    <portal parent={div}>
      test2
    </portal>
  </div>
)
```

### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-portal/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-portal)](https://github.com/d8corp/innet-portal/issues)
> ---
[![stars](https://img.shields.io/github/stars/d8corp/innet-portal?style=social)](https://github.com/d8corp/innet-portal/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-portal?style=social)](https://github.com/d8corp/innet-portal/watchers)
