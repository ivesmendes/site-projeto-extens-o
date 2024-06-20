import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <footer>
      <div className="container footer-cotniander">
      <ul className='footer-categories'>
        <li><Link to={'/post;categories/Education'}>Educação</Link></li>
      </ul>

      <div className='footer-copyright'>
        <small> &copy; Copyright Todos os Direitos Reservados || Alunos ICEV</small>
      </div>
      </div>
    </footer>
  )
}
