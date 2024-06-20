import { Link } from "react-router-dom"

export default function ErroPage() {
  return (
    <section>
      <div className="erro-center">
        <h2>404</h2>
        <h3>Ops, Página não encontrada!</h3>
        <Link  to={'/'} className='btn btn-primary'>Voltar para Home</Link>
      </div>
    </section>
  )
}
