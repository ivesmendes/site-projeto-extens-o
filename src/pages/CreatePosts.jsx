import { useState } from "react"


export default function CreatePosts() {


  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbImage, setthumbImage] = useState('')


  const postCategories = ['Education','Discovery','Agreculture','Entertaiment','Music','Investment','Fashion','Sports','Sciente','Weather'];

  

  return (
    <section className='createPosts'>
      <div className="container form-container createPosts-container">
      <h2>Criação de Posts</h2>
        <form action="" className='form createPosts-form'>

          <input type="text" placeholder='Título' name='title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />

          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>

          <input type="file" value={thumbImage} onChange={e => setthumbImage(e.target.value)} accept="png, jgp, jpeg" />

          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </section>
  )
}
