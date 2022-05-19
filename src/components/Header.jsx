import { Link } from "react-router-dom";
import logoOrange from "../assets/logoOrange.png";
import "../styles/Header.css"

function Header() {
    return (
        <header>
            <img src={logoOrange} alt="orange logo Kasa" />
            <nav>
                <Link to="/" className="menu">Accueil</Link>
                <Link to="/apropos" className="menu">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header