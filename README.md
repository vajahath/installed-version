# installed-version
Get the installed version of the package

## Install
```
npm install --save installed-version
```

## Usage
### For cli tools
```js
const installedVersion = require('installed-version');

let version = installedVersion('your-package-name'); //=> 1.0.2
```

### For normal packages
```js
const installedVersion = require('installed-version');

let version = installedVersion(); //=> 1.5.1
```

## Note:
For globally installed cli apps, it'll detect the `package.json` file and extract the version. You must pass the cli tool name as an argument.
```js
installedVersion('your-package-name'); //=> 1.0.2
```

For normal packages, will go to package root and fetch `package.json` - extracts version. You must not provide any argumnets. Be as simple as you can..
```js
installedVersion(); //=> 1.0.2
```

## Licence
MIT &copy; [Vajahath Ahmed](https://twitter.com/vajahath7)