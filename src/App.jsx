import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home.jsx'
import Admissions from './admissions.jsx'
import Events from './events.jsx'
import Contact from './contact.jsx'
import About from './about.jsx'
import Support from './support.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        // this is my landing page below//
        <Route path='/' element={<Home/>} />
        <Route path='events' element={<Events/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admissions' element={<Admissions/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </Router>
  )
}

export default App;
