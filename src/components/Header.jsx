import { Link, useLocation } from "react-router-dom";
import logoOrange from "../assets/logoOrange.png";
import "../styles/Header.css"
import { useEffect, useState } from "react";

function Header() {

    let [thisIsHome, setThisIsHome] = useState("noTextDeco")
    let [thisIsAPropos, setThisIsAPropos] = useState("noTextDeco")
    let currentAdress = useLocation().pathname

    useEffect(() => {
        function whereIsThis() {
            if (currentAdress === "/") {
                setThisIsHome("")
                setThisIsAPropos("noTextDeco")
            } else if (currentAdress === "/apropos") {
                setThisIsAPropos("")
                setThisIsHome("noTextDeco")
            }
        }
        whereIsThis()
    }, [currentAdress])

    return (
        <header>
            <img className="logoOrange" src={logoOrange} alt="orange logo Kasa" />
            <nav>
                <Link to="/" className={`menu ${thisIsHome}`}>Accueil</Link>
                <Link to="/apropos" className={`menu ${thisIsAPropos}`}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header