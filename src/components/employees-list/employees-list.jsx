import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

export default function EmployeesList({ employees, onDelete, onToggleProp }) {
  if (!employees.length) {
    return <p className="text-center p-5 pb-4 text-secondary">Еще нет сотрудников</p>
  }

  return (
    <ul className="app-list list-group">
      {employees.map(employee => (
        <EmployeesListItem
          key={employee.id}
          {...employee}
          onDelete={() => onDelete(employee.id)}
          // onToggleIncrease={() => onToggleIncrease(employee.id)}
          // onToggleLike={() => onToggleLike(employee.id)}
          onToggleProp={e =>
            onToggleProp(employee.id, e.currentTarget.getAttribute('data-toggle'))
          }
        />
      ))}
    </ul>
  )
}
