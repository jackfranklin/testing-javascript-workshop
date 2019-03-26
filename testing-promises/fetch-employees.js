const fetchEmployees = () => {
  // imagine that in real life this made a network call to an API
  // which I'm faking here for the purposes of the workshop with Promise.resolve
  return Promise.resolve({
    employees: [
      { name: 'Alice', department: 'Engineering', tenure: 5 },
      { name: 'Bob', department: 'HR', tenure: 2 },
      { name: 'Charlie', department: 'Finance', tenure: 3 },
      { name: 'Danielle', department: 'Engineering', tenure: 1 },
      { name: 'Edward', department: 'Engineering', tenure: 7 },
      { name: 'Grace', department: 'Design', tenure: 4 },
    ],
  })
}

module.exports = fetchEmployees
