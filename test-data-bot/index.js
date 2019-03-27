const employees = [
  { name: 'Alice', department: 'Engineering', tenure: 5 },
  { name: 'Bob', department: 'HR', tenure: 2 },
  { name: 'Charlie', department: 'Finance', tenure: 3 },
  { name: 'Danielle', department: 'Engineering', tenure: 1 },
  { name: 'Edward', department: 'Engineering', tenure: 7 },
  { name: 'Grace', department: 'Design', tenure: 4 },
]

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

module.exports = findEmployees
