# demo-scss-npm-module 

[![npm][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![js-standard-style][standard-image]][standard-url]

A demo of a sass/scss only npm module

## Install

```sh
$ npm install demo-scss-npm-module --save 
```

## Usage
This package can be imported/required like any npm package so long as the final npm build tool uses [node-sass](https://www.npmjs.com/package/node-sass) and [node-sass-import](https://www.npmjs.com/package/node-sass-import)

```scss
@import demo-scss-npm-module

.my-world {
  color: $main-color;
}
```

To build the css output as a standalone
1. Clone the [github repository](https://github.com/anarh/demo-scss-npm-module) and
2. `npm install`
3. `npm run build:css`
4. The built css should now be inside of the `/dist` directory

## License

2016 MIT © [Emmanuel (Manny) Narh]()

[travis-image]: https://travis-ci.org/anarh/demo-scss-npm-module.svg?branch=master
[travis-url]: https://travis-ci.org/anarh/demo-scss-npm-module
[npm-image]: https://img.shields.io/npm/v/demo-scss-npm-module.svg?style=flat
[npm-url]: https://npmjs.org/package/demo-scss-npm-module
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: http://standardjs.com/
[coveralls-image]: https://coveralls.io/repos/anarh/demo-scss-npm-module/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/anarh/demo-scss-npm-module
