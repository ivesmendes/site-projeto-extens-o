import { Link } from "react-router-dom"

export default function ErroPage() {
  return (
    <section>
      <div className="erro-center">
        <h2>404</h2>
        <h3>Ops, This Page Not Found!</h3>
        <Link  to={'/'} className='btn btn-primary'>Go Back Home</Link>
      </div>
    </section>
  )
}
