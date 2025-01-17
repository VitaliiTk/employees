import './app-info.css'

export default function AppInfo({ employees, companyName }) {
  const totalEmployees = employees.length
  const increasedEmployees = employees.filter(employee => employee.isIncrease).length

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании: {companyName}</h1>
      <h2>Общее количество сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {increasedEmployees}</h2>
    </div>
  )
}
