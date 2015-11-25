var result = require('./result');

console.log(result.response(result.set(result.codeObj.success)));
var path = require('path');
console.log(path.resolve('./result.js'));
console.log(require.cache);
delete require.cache[path.resolve('./result.js')];
var result2 = require('./result');
console.log(result2.response());