import { BrowserRouter as Router } from "react-router-dom"
import Header from "../components/Header"

function Home() {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default Home