const findEmployees = require('./index')

describe('filtering employees', () => {
  it('can filter for employees based on tenure', () => {
    const allEmployees = [
      { name: 'jack', department: 'engineering', tenure: 2 },
      { name: 'alice', department: 'finance', tenure: 3 },
    ]

    const result = findEmployees(allEmployees, {
      tenure: 2,
    })

    expect(result).toEqual([
      {
        name: 'jack',
        department: 'engineering',
        tenure: 2,
      },
    ])
  })
})
