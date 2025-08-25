
import React from 'react'

const COLORS = [
  { name: 'Natural Titanium', ring: 'bg-[conic-gradient(from_0deg,rgba(229,229,229,0.85),rgba(120,120,120,0.85))]' },
  { name: 'Blue Titanium', ring: 'bg-[conic-gradient(from_0deg,rgba(120,140,255,0.85),rgba(20,40,120,0.85))]' },
  { name: 'White Titanium', ring: 'bg-[conic-gradient(from_0deg,rgba(255,255,255,0.85),rgba(200,200,200,0.85))]' },
  { name: 'Black Titanium', ring: 'bg-[conic-gradient(from_0deg,rgba(40,40,40,0.85),rgba(10,10,10,0.85))]' }
]

export default function ColorRow() {
  return (
    <section className="bg-black">
      <div className="container-max py-14 md:py-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Four striking finishes.</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {COLORS.map(c => (
            <div key={c.name} className="text-center">
              <div className={"mx-auto size-24 md:size-28 rounded-full hairline " + c.ring}></div>
              <p className="mt-3 text-sm md:text-base text-white/80">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
