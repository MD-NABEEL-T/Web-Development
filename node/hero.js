//COMMONJS
const a=require('./ironman');

//ES6
import b from './ironman.js'

// One More Important Thing
// For ES6 modules in Node.js:
// package.json
// {
//   "type": "module"
// }
// Otherwise Node treats files as CommonJS and import/export gives error.