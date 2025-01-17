import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

export default function EmployeesList({ employees, onDelete }) {
  if (!employees.length) {
    return <p className="text-center p-5 pb-4">Еще нет сотрудников</p>
  }

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
