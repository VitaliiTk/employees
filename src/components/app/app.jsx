import { useState } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

export default function App() {
  const [employees, setEmployees] = useState([
    { name: 'John C.', salary: 800, isIncrease: true, id: 0 },
    { name: 'Alex M.', salary: 3000, isIncrease: false, id: 1 },
    { name: 'Carl W.', salary: 5000, isIncrease: true, id: 2 }
  ])

  // add new employee
  const handleAddEmployee = (name, salary) => {
    console.log(name, salary)

    const newEmployee = {
      name,
      salary,
      id: Date.now(),
      isIncrease: false
    }

    setEmployees(prevEmployees => [...prevEmployees, newEmployee])
  }

  // delete employee
  const handleDeleteEmployee = id => {
    setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id))
  }

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employees={employees} onDelete={id => handleDeleteEmployee(id)} />
      <EmployeesAddForm onAddEmployee={handleAddEmployee} />
    </div>
  )
}
