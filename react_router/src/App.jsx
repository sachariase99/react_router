import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigation, Home, Koncepter, Kontakt, Om, Utm, } from './components'

function App() {

  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/koncepter" Component={Koncepter} />
        <Route path="/kontakt" Component={Kontakt} />
        <Route path="/om" Component={Om} />
        <Route path="/utm" Component={Utm} />
      </Routes>
    </Router>
    </>
  )
}

export default App
