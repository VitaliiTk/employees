import './employees-list-item.css'

import { TbPremiumRights } from 'react-icons/tb'

export default function EmployeesListItem({ name, salary, isIncrease }) {
  return (
    <li className={!isIncrease ? "list-group-item d-flex justify-content-between" : "list-group-item d-flex justify-content-between increase"}>
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}
