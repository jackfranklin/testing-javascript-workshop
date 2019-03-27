const EventHub = require('./index')

describe('EventHub', () => {
  it('calls the listener when the event happens', () => {
    // TODO: rewrite this test using spies
    let called = false

    const eventHub = new EventHub()

    eventHub.listen('foo', () => {
      called = true
    })
    expect(called).toEqual(true)
  })

  it('does not call the listener if the event name does not match', () => {
    // TODO: write this test
    // by creating a spy and confirming that it does not get called
  })
})
