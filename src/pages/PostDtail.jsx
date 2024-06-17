import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import postDtailImage from '../assets/1.jpg'

export default function PostDtail() {
  return (
    <section>
      <div className="container PostDtail-container">
        <div className="postdtail-top">
          <PostAuthor />
            <div className="postdtail-buttons">
              <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>
                Edit
              </Link>
              <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>
                Delete
              </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam architecto accusantium cupiditate nemo laboriosam quam pariatur, nihil, cum sint odio tempore omnis commodi obcaecati eveniet vel itaque quasi veritatis nisi?</h1>
        <div className="postdetail-image">
          <img src={postDtailImage} alt="" />
        </div>
        <div className="postdtail-para">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ratione reprehenderit optio sit a delectus eum. Iure laboriosam molestiae blanditiis ad rerum laborum ab perferendis facilis dicta nihil. Dicta, earum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ratione reprehenderit optio sit a delectus eum. Iure laboriosam molestiae blanditiis ad rerum laborum ab perferendis facilis dicta nihil. Dicta, earum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ratione reprehenderit optio sit a delectus eum. Iure laboriosam molestiae blanditiis ad rerum laborum ab perferendis facilis dicta nihil. Dicta, earum?
        </p>
        </div>
      </div>
    </section>
  )
}
