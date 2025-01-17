import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

export default function EmployeesList({ employees, onDelete }) {
  return (
    <ul className="app-list list-group">
      {employees.map(employee => (
        <EmployeesListItem
          key={employee.id}
          {...employee}
          onDelete={() => onDelete(employee.id)}
        />
      ))}
    </ul>
  )
}
