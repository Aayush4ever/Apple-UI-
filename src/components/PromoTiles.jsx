import React from 'react'
import { motion } from 'framer-motion'

const tiles = [
  {
    k: 'camera',
    title: 'A camera that changes everything',
    copy: '48MP Main. 5x Telephoto on Pro Max. Night mode that truly shines.',
    image: '/images/iphone-camera.jpg'
  },
  {
    k: 'chip',
    title: 'A17-class chip. A whole new class of speed.',
    copy: 'Next-gen CPU/GPU and Neural Engine for blazing performance and AI features.',
    image: '/images/iphone-chip.jpg'
  }
]

export default function PromoTiles() {
  return (
    <section className="bg-black border-y border-white/10">
      <div className="container-max py-16 md:py-20 grid md:grid-cols-2 gap-6 md:gap-8">
        {tiles.map((t, idx) => (
          <motion.article
            key={t.k}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="rounded-3xl hairline overflow-hidden bg-white/[0.03] hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src={t.image}
              alt={t.title}
              className="w-full h-64 md:h-72 object-cover"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-4xl font-semibold leading-tight">{t.title}</h3>
              <p className="text-white/75 mt-3 md:mt-4">{t.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}