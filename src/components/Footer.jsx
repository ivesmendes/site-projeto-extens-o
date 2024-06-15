import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <footer>
      <div className="container footer-cotniander">
      <ul className='footer-categories'>
        <li><Link to={'/post;categories/Education'}>Education</Link></li>
        <li><Link to={'/post;categories/Discovery'}>Discovery</Link></li>
        <li><Link to={'/post;categories/Agreculture'}>Agreculture</Link></li>
        <li><Link to={'/post;categories/Entertaiment'}>Entertaiment</Link></li>
        <li><Link to={'/post;categories/Art'}>Art</Link></li>
        <li><Link to={'/post;categories/Business'}>Business</Link></li>
        <li><Link to={'/post;categories/Investment'}>Investment</Link></li>
        <li><Link to={'/post;categories/Fashion'}>Fashion</Link></li>
        <li><Link to={'/post;categories/Sports'}>Sports</Link></li>
        <li><Link to={'/post;categories/Science'}>Science</Link></li>
        <li><Link to={'/post;categories/Weather'}>Weather</Link></li>
      </ul>

      <div className='footer-copyright'>
        <small> &copy; Copyright All Rights Reserved || Egator Youtube Tutorials</small>
      </div>
      </div>
    </footer>
  )
}
