const findWordsOfLength = require('./index')
const assert = require('assert')

const result = findWordsOfLength('The person went walking', 3)
assert(result.length === 1)
assert(result[0] === 'The')

