import { useState } from 'react'
import './employees-add-form.css'

export default function EmployeesAddForm({ onAddEmployee }) {
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    if (!name || !salary) {
      alert('Введите корректные данные')
      return
    }

    onAddEmployee(name, salary)
    setName('')
    setSalary('')
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={handleSubmit} className="add-form d-flex">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          required
        />
        <input
          value={salary}
          onChange={e => setSalary(e.target.value)}
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          required
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  )
}
