import { Link, useParams } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import postDtailImage from '../assets/1.jpg'
import {  PostContent } from '../data/data'

export default function PostDtail() {
      const { id } = useParams();
      console.log(id)
      return (
        <section>
          <div className="container PostDtail-container">
            <div className="postdtail-top">
              <PostAuthor />
            </div>
            {
                PostContent.map(({idUrl, image, authorId, title, content}, index)=>{
                  if(idUrl == id) {
                    return (
                      <>
                        <h1 key={idUrl}>{title}</h1>
                        <img src={image} alt="" />
                        <div className="postdtail-para">
                          <p>{content}</p>
                        </div>
                      </>
                    )
                  }
                 
                
              })
            }
          </div>
        </section>
      )
   
  
}
