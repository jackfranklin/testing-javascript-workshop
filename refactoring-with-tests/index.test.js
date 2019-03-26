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

  it('can filter for employees based on department', () => {
    const allEmployees = [
      { name: 'jack', department: 'engineering', tenure: 2 },
      { name: 'alice', department: 'finance', tenure: 3 },
    ]

    const result = findEmployees(allEmployees, {
      department: 'engineering',
    })

    expect(result).toEqual([
      {
        name: 'jack',
        department: 'engineering',
        tenure: 2,
      },
    ])
  })

  it('can filter for employees based on department and tenure', () => {
    const allEmployees = [
      { name: 'jack', department: 'engineering', tenure: 2 },
      { name: 'bob', department: 'finance', tenure: 2 },
      { name: 'alice', department: 'engineering', tenure: 3 },
    ]

    const result = findEmployees(allEmployees, {
      department: 'engineering',
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
