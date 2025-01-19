import { useState } from 'react'
import './search-panel.css'

export default function SearchPanel({ onUpdateSearch }) {
  const [term, setTerm] = useState('')

  const handleUpdateSearch = e => {
    const inputText = e.target.value
    setTerm(inputText)
    onUpdateSearch(inputText)
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={term}
      onChange={handleUpdateSearch}
    />
  )
}
