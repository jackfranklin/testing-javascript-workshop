jest.mock('./fetch-employees')

const fetchEmployees = require('./fetch-employees')
const findEmployees = require('./index')

const mockEmployees = employees => {
  fetchEmployees.mockImplementationOnce(() => {
    return Promise.resolve({ employees })
  })
}

describe('filtering employees', () => {
  it('can filter for employees based off tenure', () => {
    // TODO: rewrite this test to use async/await syntax
    mockEmployees([
      { name: 'Bob', department: 'Engineering', tenure: 2 },
      { name: 'Alice', department: 'Design', tenure: 1 },
    ])

    return findEmployees({ tenure: 2 }).then(employees => {
      expect(employees).toEqual([
        { name: 'Bob', department: 'Engineering', tenure: 2 },
      ])
    })
  })
})
