jest.mock('./fetch-employees')

const fetchEmployees = require('./fetch-employees')
const findEmployees = require('./index')

describe('filtering employees', () => {
  it('can filter for employees based off tenure', () => {
    fetchEmployees.mockImplementationOnce(() => {
      return Promise.resolve({
        employees: [
          { name: 'Alice', department: 'Engineering', tenure: 3 },
          { name: 'Bob', department: 'HR', tenure: 2 },
        ],
      })
    })

    return findEmployees({ tenure: 2 }).then(employees => {
      expect(employees).toEqual([
        {
          name: 'Bob',
          department: 'HR',
          tenure: 2,
        },
      ])
    })
  })

  it('can filter based on department', () => {
    // update jest.config.js and this test will start failing
    // can you fix it?
    return findEmployees({ department: 'Engineering' }).then(employees => {
      expect(employees).toEqual([
        {
          name: 'Alice',
          department: 'Engineering',
          tenure: 5,
        },
      ])
    })
  })
})
