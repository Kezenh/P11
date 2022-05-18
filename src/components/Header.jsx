import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <nav>
                <Link to="/" className="menu">Accueil</Link>
                <Link to="/" className="menu">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header