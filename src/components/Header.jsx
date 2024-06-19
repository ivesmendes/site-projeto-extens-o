import { Link } from "react-router-dom"

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  return (
    <nav>
      <div className="container nav-contianer">
        <Link className="nav-logo" to={'/'}>
            <h3>Laços De <span>Compreensão</span></h3>
        </Link>

        <ul className="nav-menu">
            <li><Link to={'/profile/id'}>Perfil</Link></li>
            <li><Link to={'/create'}>Criar</Link></li>
            <li><Link to={'/authors'}>Autores</Link></li>
            <li><Link to={'/logout'}>Logout</Link></li>
        </ul>

        <button className="nav-toggle-button">
        <FaBars />
        <AiOutlineClose />
        </button>
      </div>
    </nav>
  )
}
