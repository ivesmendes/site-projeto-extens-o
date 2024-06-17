import { Link } from 'react-router-dom'

import { HeadPost } from '../data/data'

export default function Headpost() {
  return (
    <article className="head-post">
            {
                HeadPost.map(({id, Image, authorId, title, des}, index)=>{
                    return(
                        <div key={index}>
                            <div className="post-image">
                                <img src={Image} alt="" />
                            </div>
                            <div className="post-content">
                                <Link to={`posts/${authorId}`}>
                                    <h3>{title}</h3>
                                 </Link>
                                <p>{des}</p>
                            </div>
                        </div>
                    )
                })
            }
        
    </article>
  )
}
