import React from 'react'

export default function EditPost() {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbImage, setthumbImage] = useState('')


  const postCategories = ['Education','Discovery','Agreculture','Entertaiment','Music','Investment','Fashion','Sports','Sciente','Weather'];



  return (
    <section className='editPost'>
      <div className="container form-container editPost-container">
        <h2>Edit Posts</h2>
        <form action="" className='form editPost-form'>
          <p className="form-message">This is the invalid message</p>

          <input type="text" placeholder='Title' name='title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />

          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>

          <input type="file" value={thumbImage} onChange={e => setthumbImage(e.target.value)} accept="png, jgp, jpeg" />

          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </section>
  )
}
