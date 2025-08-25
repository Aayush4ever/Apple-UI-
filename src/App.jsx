
import React from 'react'
import Header from './components/Header.jsx'
import HeroPro from './components/HeroPro.jsx'
import ColorRow from './components/ColorRow.jsx'
import PromoTiles from './components/PromoTiles.jsx'
import Highlights from './components/Highlights.jsx'
import TechSpecs from './components/TechSpecs.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="mt-[52px] md:mt-[44px]">
        <HeroPro />
        <ColorRow />
        <PromoTiles />
        <Highlights />
        <TechSpecs />
      </main>
      <Footer />
    </div>
  )
}
