const assert = require('assert')
const findWordsOfLength = require('./index')
const { test } = require('./framework')


test('It pulls out the words of the right length', () => {
  const result = findWordsOfLength('The person went walking', 3)
  assert.deepStrictEqual(result, ['The'])
})

test('It finds words only of the given length, not ones that are shorter', () => {
  const result = findWordsOfLength('The person went for a walk', 3)
  assert.deepStrictEqual(result, ['The', 'for'])
})
