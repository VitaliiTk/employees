import { useState } from 'react'
import './employees-list-item.css'

export default function EmployeesListItem({
  name,
  salary,
  onDelete,
  isIncrease,
  isLike,
  onToggleProp
}) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        isIncrease && 'increase'
      } ${isLike && 'like'}`}
    >
      <span onClick={onToggleProp} className="list-group-item-label" data-toggle="isLike">
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleProp}
          type="button"
          className="btn-cookie btn-sm "
          data-toggle="isIncrease"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}
