import { Link } from 'react-router-dom'

import AuthorImage from '../assets/icev.jpg'

export default function PostAuthor() {
  return (
    <Link to={`/posts/user/:id`} className='post-author'>
        <div className="post-author-image">
            <img src={AuthorImage} alt="" />
        </div>
        <div className="post-author-info">
            <h5>Alunos ICEV</h5>
            <small>Projeto de Extensão</small>
        </div>
    </Link>
  )
}
