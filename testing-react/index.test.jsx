const React = require('react')
const EmployeeFinder = require('./index')

const { render, fireEvent, cleanup } = require('react-testing-library')

describe('EmployeeFinder', () => {
  afterEach(cleanup)

  it('lists all employees by default', () => {
    const employees = [
      { name: 'Jack', department: 'engineering', tenure: 2 },
      { name: 'Alice', department: 'engineering', tenure: 3 },
    ]

    const { container } = render(<EmployeeFinder employees={employees} />)
    const employeeListItems = container.querySelectorAll('li')
    expect(Array.from(employeeListItems).map(item => item.innerHTML)).toEqual([
      'Jack - engineering - 2',
      'Alice - engineering - 3',
    ])
  })
})
