import './app.css'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

export default function App() {
  const data = [
    { name: 'John C.', salary: 800, isIncrease: true, id: 1 },
    { name: 'Alex M.', salary: 3000, isIncrease: false, id: 2 },
    { name: 'Carl W.', salary: 5000, isIncrease: true, id: 3 }
  ]

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employees={data} />
      <EmployeesAddForm />
    </div>
  )
}
