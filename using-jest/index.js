const findWordsOfLength = (sentence, count) => {
  return sentence.split(' ').filter(word => {
    return word.length <= count
  })
}

module.exports = findWordsOfLength
