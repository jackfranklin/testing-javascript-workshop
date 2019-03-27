const ButtonCounter = require('./index')

describe('Testing the button counter', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="test"></div>'
  })

  it('has an initial count of 0', () => {
    const element = document.getElementById('test')
    const button = new ButtonCounter(element)
    button.init()

    expect(element.querySelector('button').innerHTML).toEqual('0')
  })

  it('can be incremeneted', () => {
    // TODO: can you write this test?
    // click on the button and check that the button now has '1' in it, rather than '0'
    // TOP TIP: this is how you can fake a click event:
    // foo.dispatchEvent(new Event('click'))
  })
})
