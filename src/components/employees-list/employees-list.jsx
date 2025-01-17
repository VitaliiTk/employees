import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

export default function EmployeesList({ employees }) {
  return (
    <ul className="app-list list-group">
      {employees.map(employee => (
        <EmployeesListItem
          key={employee.name}
          name={employee.name}
          salary={employee.salary}
        />
      ))}
    </ul>
  )
}
