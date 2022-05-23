import introBackground from "../assets/introBackground.png"
import "../styles/Intro.css"

function Intro() {
    return (
        <section>
            <p className="introText">Chez vous, partout et ailleurs</p>
            <div className="mask">
                <img src={introBackground} alt="intro background" className="imgIntro" />
            </div>
        </section>
    )
}

export default Intro