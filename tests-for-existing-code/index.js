class EventHub {
  constructor() {
    this.listeners = []
  }

  listen(eventName, fn) {
    this.listeners.push({
      eventName,
      fn,
    })
  }

  trigger(eventName) {
    this.listeners.forEach(listener => {
      if (listener.eventName === eventName) {
        listener.fn()
      }
    })
  }
}

module.exports = EventHub
