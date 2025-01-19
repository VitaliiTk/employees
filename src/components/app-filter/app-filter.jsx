import { useState } from 'react'

import './app-filter.css'

export default function AppFilter(props) {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button" onClick={props.onFilterByAll}>
        Все сотрудники
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
        onClick={props.onFilterByEncrease}
      >
        На повышение
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
        onClick={props.onFilterBySalary}
      >
        З/П больше 1000$
      </button>
    </div>
  )
}
