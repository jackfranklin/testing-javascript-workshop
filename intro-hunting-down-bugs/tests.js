const assert = require('assert')
const findWordsOfLength = require('./index')

const result1 = findWordsOfLength('The person went walking', 3)
assert.deepStrictEqual(result1, ['The'])
