# installed-version
Get version of your app

[![npm](https://img.shields.io/npm/v/installed-version.svg)](https://www.npmjs.com/package/installed-version)
[![Travis](https://img.shields.io/travis/vajahath/installed-version.svg)](https://travis-ci.org/vajahath/installed-version)
[![styled with prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/dt/installed-version.svg)]()
[![Built with generator-ts-np](https://img.shields.io/badge/scaffolding-ts_np-2699ad.svg)](https://github.com/vajahath/generator-ts-np)


## Install
```
npm i --save installed-version
```

## How it works?
- goes to your application root
- fetches `package.json`
- extracts version and returns it

> Note: :warning: You can't use this package for cli applications.

## Usage
```js
const version = require('installed-version');

let v = version();

console.log(v) // '1.0.0'
```
## Change log
- **1.0.0**
  - initial stable release


<br>

[![used version of ts-np generator](https://img.shields.io/badge/ts--np-v0.0.24-a5a5a5.svg?style=flat-square)](https://github.com/vajahath/generator-ts-np)

## Licence
MIT &copy; [Vajahath Ahmed](https://twitter.com/vajahath)
