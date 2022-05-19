import { Link } from "react-router-dom"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <p>Je suis l'accueil !</p>
      <Link to="/logement">Clique ici pour la page logement !</Link>
    </div>
  )
}

export default Home