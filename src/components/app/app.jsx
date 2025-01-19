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
  const [filter, setFilter] = useState('all')
  const visibleEmployees = filterPost(searchEmployees(employees, term), filter)

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
    console.log('delete', id)

    setEmployees(prevEmployees =>
      prevEmployees.filter(employee => employee.id !== id)
    )
  }

  // это универсальный метод, который позволяет переключать любое свойство у сотрудника по id и названию свойства (prop)
  const handleToggleProp = (id, prop) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee =>
        employee.id === id ? { ...employee, [prop]: !employee[prop] } : employee
      )
    )
  }

  // search by name logic
  function onUpdateSearch(searchText) {
    setTerm(searchText)
  }

  function searchEmployees(arrayData, searchText) {
    if (!searchText) return arrayData

    return arrayData.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  // filter logic
  function filterPost(items, filter) {
    switch (filter) {
      case 'increase':
        return items.filter(item => item.isIncrease)
      case 'salary':
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  function onFilterSelect(filter) {
    setFilter(filter)
  }

  return (
    <div className="app">
      <AppInfo employees={employees} companyName={companyName} />
      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <EmployeesList
        employees={visibleEmployees}
        onDelete={id => handleDeleteEmployee(id)}
        onToggleProp={handleToggleProp}
      />
      <EmployeesAddForm onAddEmployee={handleAddEmployee} />
    </div>
  )
}
