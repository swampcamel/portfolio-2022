import { Link } from 'react-router-dom'

let Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/about">Who I Am</Link></li>
        <li><Link to="/contact">Find Me</Link></li>
      </ul>
    </div>
  )
}

export default Menu