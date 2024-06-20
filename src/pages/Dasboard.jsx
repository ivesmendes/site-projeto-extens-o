import { DummyPosts } from "../data/data"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Dasboard() {
  const [posts, setPosts]= useState(DummyPosts)
  return (
    <section className='deashboard'>
      { posts.length > 0  ? <div className="container deashboard-cotnianer">
            {
            posts.map(({id, Image, authorId, category, title, des}, index)=>{
              return <article key={index} className="deashboard-post">
                <div className="deashboard-post-info">
                  <div className="deashboard-post-image">
                    <img src={Image} alt="" />
                  </div>
                  <h5>{title}</h5>
                </div>
                <div className="deashboard-posts-action">
                  <Link to={`/posts/${authorId}`} className="btn-V btn btn-sm">Visualizar</Link>
                </div>
              </article>
            })
            }   
        </div> : <h2 className="error-center">Não há nenhum post.</h2>
        }
    </section>
  )
}
