const React = require('react')

const findEmployees = (employees, filters) => {
  return employees.filter(employee => {
    if (filters.department && filters.tenure) {
      return (
        employee.tenure === filters.tenure &&
        employee.department === filters.department
      )
    } else if (filters.department) {
      return employee.department === filters.department
    } else if (filters.tenure) {
      return employee.tenure === filters.tenure
    } else {
      return true
    }
  })
}

const EmployeeFinder = props => {
  const [tenureFilterValue, setTenureFilterValue] = React.useState('')

  const [employees, setEmployees] = React.useState(props.employees)

  const onButtonClick = event => {
    event.preventDefault()

    setEmployees(
      findEmployees(props.employees, {
        tenure: tenureFilterValue,
      })
    )
  }

  return (
    <div>
      <label>Filter by tenure</label>
      <input
        type="number"
        value={tenureFilterValue}
        onChange={e => setTenureFilterValue(e.target.valueAsNumber)}
      />
      <button onClick={onButtonClick}>Filter by tenure</button>

      <ul>
        {employees.map(e => (
          <li key={e.name}>
            {e.name} - {e.department} - {e.tenure}
          </li>
        ))}
      </ul>
    </div>
  )
}

module.exports = EmployeeFinder
