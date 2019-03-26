jest.mock('./fetch-employees')

const fetchEmployees = require('./fetch-employees')
const findEmployees = require('./index')

describe('filtering employees', () => {
  // "x" here makes Jest skip the test - it won't run it
  // remove this "x" when we get to the right part of the day!
  xit('can filter for employees based off tenure', () => {
    // TODO: use fetchEmployees.mockImplementation to fake the employees data
    // for the purposes of this test
    // and then test that filtering by tenure works
  })
})
