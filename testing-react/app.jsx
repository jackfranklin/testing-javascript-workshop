const EmployeeFinder = require('./index')

const React = require('react')
const ReactDOM = require('react-dom')

const employees = [
  { name: 'Alice', department: 'Engineering', tenure: 5 },
  { name: 'Bob', department: 'HR', tenure: 2 },
  { name: 'Charlie', department: 'Finance', tenure: 3 },
  { name: 'Danielle', department: 'Engineering', tenure: 1 },
  { name: 'Edward', department: 'Engineering', tenure: 7 },
  { name: 'Grace', department: 'Design', tenure: 4 },
]
ReactDOM.render(
  <EmployeeFinder employees={employees} />,
  document.getElementById('root')
)
