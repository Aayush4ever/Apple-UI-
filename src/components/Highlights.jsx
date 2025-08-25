import React from 'react'

const items = [
  { title: 'Titanium. Strong. Light. Pro.', copy: "A premium enclosure that's remarkably durable and featherlight." },
  { title: 'Battery for the long haul.', copy: 'All-day battery life so you can do more, charge less.' },
  { title: 'USB-C. Finally.', copy: 'Charge, transfer, and connect accessories with a universal port.' },
  { title: 'iOS. Powerful and private.', copy: 'Intuitive features and industry-leading privacy protections.' }
]

export default function Highlights() {
  return (
    <section className="bg-black">
      <div className="container-max py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-5xl font-semibold">Why iPhone</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((it, idx) => (
            <article key={idx} className="rounded-3xl hairline p-6 md:p-8 bg-white/[0.02]">
              <h3 className="text-xl md:text-2xl font-semibold">{it.title}</h3>
              <p className="text-white/75 mt-2">{it.copy}</p>
              <div className="mt-6 aspect-[16/10] rounded-2xl bg-[radial-gradient(400px_200px_at_50%_-40px,rgba(255,255,255,0.12),transparent)]"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}