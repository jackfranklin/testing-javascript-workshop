class ButtonCounter {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.count = 0
  }

  init() {
    this.button = document.createElement('button')

    this.button.addEventListener('click', () => {
      this.incrementCount()
    })

    this.update()

    this.rootElement.appendChild(this.button)
  }

  incrementCount() {
    this.count++
    this.update()
  }

  update() {
    this.button.innerHTML = this.count
  }
}

module.exports = ButtonCounter
