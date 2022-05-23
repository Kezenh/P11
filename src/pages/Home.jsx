import { Link } from "react-router-dom"
import "../styles/Home.css"
import { useEffect } from "react"
import Intro from "../components/Intro"

function Home() {

  async function fetchHousings() {
    const response = await fetch("http://localhost:3000/datas/datas.json")
    console.log(response)
    return response
  }

  useEffect(() => {
    fetchHousings()
  }, [])

  return (
    <div className="home">
      <Intro />
    </div>
  )
}

export default Home