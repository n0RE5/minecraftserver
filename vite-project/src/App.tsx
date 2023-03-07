import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import './styles/App.scss'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
