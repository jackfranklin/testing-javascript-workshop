const Incrementor = require('./index')

describe('Incrementor', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('increments by 1 after the given interval', () => {
    const incrementor = new Incrementor(500)

    // TODO: make this test pass by running the timer via Jest and asserting on the current count
  })

  // TODO: write another test where you assert that the after two intervals, the count is two. This tests that the incrementor enqueues itself
})
