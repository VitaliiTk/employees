import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

import employeesData from '../../employees'

const companyName = 'Булочка'

export default function App() {
  const [employees, setEmployees] = useState(employeesData)
  const [term, setTerm] = useState('')
  const filterEmployeesByName = searchEmployees(employees, term)
  const filterIncreasedEmployees = searchIncreasedEmployees(employees)

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

  // это универсальный метод, который позволяет переключать любое свойство у сотрудника по id и названию свойства (prop)
  const handleToggleProp = (id, prop) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee =>
        employee.id === id ? { ...employee, [prop]: !employee[prop] } : employee
      )
    )
  }

  // filter by name logic
  function onUpdateSearch(searchText) {
    setTerm(searchText)
  }

  function searchEmployees(arrayData, searchText) {
    if (!searchText) return arrayData

    return arrayData.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  // filter by increase logic

  function onFilterByAll() {
    console.log('onFilterByAll')
  }

  function onFilterByEncrease() {
    console.log('onFilterByEncrease')
  }

  function onFilterBySalary() {
    console.log('onFilterBySalary')
  }

  function searchIncreasedEmployees(arrayData) {
    return arrayData.filter(item => item.isIncrease)
  }

  return (
    <div className="app">
      <AppInfo employees={employees} companyName={companyName} />
      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter
          onFilterByAll={onFilterByAll}
          onFilterByEncrease={onFilterByEncrease}
          onFilterBySalary={onFilterBySalary}
        />
      </div>
      <EmployeesList
        employees={filterEmployeesByName}
        onDelete={id => handleDeleteEmployee(id)}
        onToggleProp={handleToggleProp}
      />
      <EmployeesAddForm onAddEmployee={handleAddEmployee} />
    </div>
  )
}
