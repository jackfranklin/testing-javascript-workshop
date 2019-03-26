const findWordsOfLength = require('./index')

// TODO: rewrite this test using Jest
  // const result = findWordsOfLength('The person went walking', 3)
  // assert.deepStrictEqual(result, ['The'])

test('It finds words only of the given length, not ones that are shorter', () => {
  const result = findWordsOfLength('The person went for a walk', 3)
  expect(result).toEqual(['The', 'for'])
})
