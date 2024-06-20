import { Link } from 'react-router-dom'

import { HeadPost } from '../data/data'

export default function Headpost() {
  return (
    <article className="head-post">
            {
                HeadPost.map(({idUrl, Image, authorId, title, des}, index)=>{
                    return(
                        <div key={index} className="container head-post-container">
                            <div className="post-content">
                                <Link to={`posts/${idUrl}`}>
                                    <h1>{title}</h1>
                                 </Link>
                                <p>{des}</p>
                            </div>
                            <div>
                                <img src={Image} alt=""/>
                            </div>
                        </div>
                    )
                })
            }
        
    </article>
  )
}
