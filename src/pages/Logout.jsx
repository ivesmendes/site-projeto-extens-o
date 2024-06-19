import { Link } from "react-router-dom"

export default function Logout() {
  return (
    <section>
      <div className="erro-center">
        <h1>Log Out</h1>

        <Link  to={'/'} className='btn btn-primary'>Go Back Home</Link>
      </div>
    </section>
  )
}
