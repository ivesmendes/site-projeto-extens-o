import { DummyPosts } from "../data/data"

import { useState } from "react"

import PostItem from "../components/PostItem"

export default function CategoryPosts() {
  const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="categoryPosts">
      <h1 className="page-title">Category Posts</h1>
      { posts.length > 0? <div className="container categoryPosts-cotnianer">
            {
            posts.map(({id, Image, authorId, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
            }   
        </div> : <h2 className="error-center">No posts founds</h2>
        }
    </section>
  )
}
