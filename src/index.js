import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import "./styles/Index.css"
import Header from "./components/Header"
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  </React.StrictMode>
)