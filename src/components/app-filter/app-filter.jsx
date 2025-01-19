import { useState } from 'react'

import './app-filter.css'

export default function AppFilter(props) {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'increase', label: 'На повышение' },
    { name: 'salary', label: 'З/П больше 1000$' }
  ]

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name
    const clazz = active ? 'btn-light' : 'btn-outline-light'

    return (
      <button
        key={name}
        className={'btn ' + clazz}
        type="button"
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })

  return <div className="btn-group">{buttons}</div>
}
