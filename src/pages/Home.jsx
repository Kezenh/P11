import "../styles/Home.css"
import Banner from "../components/Banner"
import Gallery from "../components/Gallery"

function Home() {

  document.title = "Kasa - Accueil"

  return (
    <div className="home">
      <Banner />
      <Gallery />
    </div>
  )
}

export default Home