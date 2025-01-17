import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

export default function EmployeesList() {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  )
}
