import { Link } from "react-router-dom"

export default function DeletePost() {
  return (
    <section>
      <div className="erro-center">
        <h1>Delete</h1>

        <Link  to={'/'} className='btn btn-primary'>Voltar para Home</Link>
      </div>
    </section>
  )
}
