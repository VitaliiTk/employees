import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

const companyName = 'Булочка'

export default function App() {
  const [employees, setEmployees] = useState([
    { name: 'John C.', salary: 800, isIncrease: true, isLike: false, id: 0 },
    { name: 'Alex M.', salary: 3000, isIncrease: false, isLike: true, id: 1 },
    { name: 'Carl W.', salary: 5000, isIncrease: false, isLike: false, id: 2 }
  ])

  // add new employee
  const handleAddEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      isIncrease: false,
      isLike: false,
      id: uuidv4()
    }

    console.log(newEmployee)

    setEmployees(prevEmployees => [...prevEmployees, newEmployee])
  }

  // delete employee
  const handleDeleteEmployee = id => {
    setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id))
  }

  // toggle increase
  // const handleToggleIncrease = id => {
  //   setEmployees(prevEmployees =>
  //     prevEmployees.map(employee =>
  //       employee.id === id ? { ...employee, isIncrease: !employee.isIncrease } : employee
  //     )
  //   )
  // }

  // toggle like
  // const handleToggleLike = id => {
  //   setEmployees(prevEmployees =>
  //     prevEmployees.map(employee =>
  //       employee.id === id ? { ...employee, isLike: !employee.isLike } : employee
  //     )
  //   )
  // }

  // это универсальный метод, который позволяет переключать любое свойство у сотрудника по id и названию свойства (prop)
  const handleToggleProp = (id, prop) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee =>
        employee.id === id ? { ...employee, [prop]: !employee[prop] } : employee
      )
    )
  }

  return (
    <div className="app">
      <AppInfo employees={employees} companyName={companyName} />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        employees={employees}
        onDelete={id => handleDeleteEmployee(id)}
        // onToggleIncrease={handleToggleIncrease}
        // onToggleLike={handleToggleLike}
        onToggleProp={handleToggleProp}
      />
      <EmployeesAddForm onAddEmployee={handleAddEmployee} />
    </div>
  )
}
