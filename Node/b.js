const { add } = require('./a')
// console.log('b', require.cache = null);
console.log('b', add(2, 3));

exports.b = 1