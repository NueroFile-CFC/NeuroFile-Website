import '/css/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.tsx'
import Home from './Home.tsx'
import Installation from './Installation.tsx'
import Playground from './Playground.tsx'
import Support from './Support.tsx'
import About from './About.tsx'
import Contact from './Contact.tsx'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/installation' element = {<Installation />} />
        <Route path = '/playground' element = {<Playground />} />
        <Route path = '/support' element = {<Support />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contactus' element = {<Contact />} />
      </Routes>
    </div>
  )
}

export default App
