import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Nieuws from './pages/Nieuws.jsx'
import AutoMaatjes from './pages/AutoMaatjes.jsx'
import FietsMaatjes from './pages/FietsMaatjes.jsx'
import Dorpsgids from './pages/Dorpsgids.jsx'
import Groepen from './pages/Groepen.jsx'
import RitAanvragen from './pages/RitAanvragen.jsx'

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
          <Route path="/nieuws" element={<Nieuws />} />
          <Route path="/automaatjes" element={<AutoMaatjes />} />
          <Route path="/automaatjes/rit-aanvragen" element={<RitAanvragen />} />
          <Route path="/fietsmaatjes" element={<FietsMaatjes />} />
          <Route path="/dorpsgids" element={<Dorpsgids />} />
          <Route path="/groepen" element={<Groepen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
