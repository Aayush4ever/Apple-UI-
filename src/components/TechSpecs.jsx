
import React from 'react'

export default function TechSpecs() {
  const spec = [
    ['Display', '6.3″ or 6.9″ Super Retina XDR'],
    ['Chip', 'A17‑class with 6‑core GPU'],
    ['Camera', '48MP Main · Ultra Wide · 5x Telephoto (Pro Max)'],
    ['Battery Life', 'Up to 29 hours video playback'],
    ['Durability', 'Titanium · Ceramic Shield · IP68'],
    ['Connector', 'USB‑C']
  ]
  return (
    <section className="bg-black">
      <div className="container-max py-16 md:py-20">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Tech Specs (at a glance)</h2>
        <div className="mt-8 overflow-hidden rounded-2xl hairline">
          <table className="w-full text-left text-sm md:text-base">
            <tbody>
              {spec.map((row, i) => (
                <tr key={i} className="even:bg-white/[0.02]">
                  <th className="py-4 md:py-5 px-4 md:px-6 font-medium text-white/80 w-[30%]">{row[0]}</th>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-white/90">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
            View full technical specifications
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="translate-y-[1px]">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
