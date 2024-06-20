import { useState } from "react"

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

export default function CreatePosts() {


  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbImage, setthumbImage] = useState('')


  const postCategories = ['Education','Discovery','Agreculture','Entertaiment','Music','Investment','Fashion','Sports','Sciente','Weather'];

  const modules ={
    toolbar:[
      [{'header' : [1, 2, 3 ,4 ,5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list' : 'ordered'}, {'list': 'bullet'}, {'indent': '+1'},{'indent': '-1'}],
      ['clean']
    ]
  }

  const formats =[
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

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

            <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)}/>

          <input type="file" value={thumbImage} onChange={e => setthumbImage(e.target.value)} accept="png, jgp, jpeg" />

          <button type="submit" className="btn btn-primary">Criar</button>
        </form>
      </div>
    </section>
  )
}
