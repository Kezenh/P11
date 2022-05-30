import "../styles/APropos.css"
import Banner from "../components/Banner"
import Chevrons from "../components/Chevron"

function APropos() {

    document.title = "Kasa - A Propos"

    return (
        <div className="aPropos">
            <Banner />
            <section className="value">
                <div className="valueTitle" >
                    <p className="title">Fiabilité</p>
                    <Chevrons number="1" />
                </div>
                <p id="valueDescription1" className="valueDescription">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </section>
            <section className="value">
                <div className="valueTitle" >
                    <p className="title">Respect</p>
                    <Chevrons number="2" />
                </div>
                <p id="valueDescription2" className="valueDescription">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </section>
            <section className="value">
                <div className="valueTitle" >
                    <p className="title">Service</p>
                    <Chevrons number="3" />
                </div>
                <p id="valueDescription3" className="valueDescription">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </section>
            <section className="value">
                <div className="valueTitle" >
                    <p className="title">Sécurité</p>
                    <Chevrons number="4" />
                </div>
                <p id="valueDescription4" className="valueDescription">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </section>
        </div>
    )
}

export default APropos