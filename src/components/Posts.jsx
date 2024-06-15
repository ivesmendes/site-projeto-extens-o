import { DummyPosts } from "../data/data"

import { useState } from "react"

import PostItem from "./PostItem"

export default function section() {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="posts">
        <div className="container post-cotnianer">
            {
                posts.map(({id, Image, authorId, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
            }   
        </div>
    </section>
  )
}
