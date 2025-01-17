import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

const companyName = 'Company Name'

export default function App() {
  const [employees, setEmployees] = useState([
    { name: 'John C.', salary: 800, isIncrease: false, id: 0 },
    { name: 'Alex M.', salary: 3000, isIncrease: false, id: 1 },
    { name: 'Carl W.', salary: 5000, isIncrease: true, id: 2 }
  ])

  // add new employee
  const handleAddEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      isIncrease: false,
      id: uuidv4()
    }

    console.log(newEmployee)

    setEmployees(prevEmployees => [...prevEmployees, newEmployee])
  }

  // delete employee
  const handleDeleteEmployee = id => {
    setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id))
  }

  return (
    <div className="app">
      <AppInfo employees={employees} companyName={companyName} />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employees={employees} onDelete={id => handleDeleteEmployee(id)} />
      <EmployeesAddForm onAddEmployee={handleAddEmployee} />
    </div>
  )
}
