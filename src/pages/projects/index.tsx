import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      <p>Essa pagina representa uma rota diferente da home.</p>
      <Link to="/">Voltar para Home</Link>
    </section>
  )
}

export default Projects
