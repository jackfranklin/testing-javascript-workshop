class Incrementor {
  constructor(interval) {
    this.count = 0
    this.incrementIn(interval)
  }

  incrementIn(interval) {
    window.setTimeout(() => {
      this.increment()
      this.incrementIn(interval)
    }, interval)
  }

  currentCount() {
    return this.count
  }

  increment() {
    this.count++
  }
}

module.exports = Incrementor
