import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AutoMaatjes from './pages/AutoMaatjes.jsx'
import FietsMaatjes from './pages/FietsMaatjes.jsx'
import Dorpsgids from './pages/Dorpsgids'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automaatjes" element={<AutoMaatjes />} />
          <Route path="/fietsmaatjes" element={<FietsMaatjes />} />
          <Route path="/dorpsgids" element={<Dorpsgids />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
