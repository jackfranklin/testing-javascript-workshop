const findEmployees = require('./index')

const { build, fake, numberBetween, oneOf } = require('test-data-bot')

const employeeBuilder = build('Employee').fields({
  name: fake(f => f.name.findName()),
  tenure: numberBetween(1, 5),
  department: oneOf('Finance', 'Engineering', 'HR', 'Design'),
})

describe('filtering employees', () => {
  it('can filter for employees based on tenure', () => {
    const allEmployees = [
      employeeBuilder({ tenure: 2 }),
      employeeBuilder({ tenure: 3 }),
    ]

    const result = findEmployees(allEmployees, {
      tenure: 2,
    })

    expect(result).toEqual([allEmployees[0]])
  })

  it('can filter for employees based on department', () => {
    // TODO: write this test using the employee builder above
  })

  it('can filter for employees based on department and tenure', () => {
    // TODO: write this test using the employee builder above
  })
})
