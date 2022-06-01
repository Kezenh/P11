import { Link } from "react-router-dom"
import "../styles/Error.css"

function Error() {

    document.title = "Kasa - 404 Error !"

    return (
        <div className="error">
            <h2>404</h2>
            <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="goToHome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error