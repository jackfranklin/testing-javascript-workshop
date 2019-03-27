const fetchEmployees = require('./fetch-employees')

const findEmployees = filters => {
  return fetchEmployees().then(response => {
    return response.employees.filter(employee => {
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
  })
}

module.exports = findEmployees
