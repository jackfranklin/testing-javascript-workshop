const findEmployees = require('./index')

describe('filtering employees', () => {
  it('is defined', () => {
    expect(findEmployees).not.toBe(undefined)
  })

  it('returns nothing if not given any employees', () => {
    expect(findEmployees([], {})).toEqual([])
  })

  it('returns nothing if given weird data', () => {
    expect(findEmployees(undefined)).toEqual([])
  })
})
