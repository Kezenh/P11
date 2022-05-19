import logoWhite from "../assets/logoWhite.png"
import "../styles/Footer.css"

function Footer() {
    return (
        <footer>
            <img src={logoWhite} alt="white logo Kasa" className="logoWhite" />
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer