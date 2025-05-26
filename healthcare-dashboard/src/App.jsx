import Dashboard from './components/Dashboard/Dashboard'
import Date from './components/Date/Date'
import Sidebar from './components/Sidebar/Sidebar'
import './styles/main.css'
export default function App() {
  return (
      <div className="main-grid">
        <Sidebar />
        <Dashboard/>
        <Date/>
      </div>
  )
}