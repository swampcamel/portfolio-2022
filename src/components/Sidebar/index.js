import { Routes, Route, useLocation } from "react-router-dom"
import Poem from '../Poem'
import Projects from '../Projects'
import Awards from '../Awards'
import About from '../About'
import Contact from '../Contact'
import { AnimatePresence } from 'framer-motion'

let Sidebar = () => {
  const location = useLocation()
  return (
    <div className="Sidebar">
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Poem />} />
          <Route path="/projects" element={<Projects />} />
          <Route path ="/awards" element={<Awards />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Sidebar