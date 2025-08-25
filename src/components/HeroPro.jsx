import React from 'react'
import { motion } from 'framer-motion'

export default function HeroPro() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-center border-b border-white/10">
      {/* Gradient backdrop */}
      <div className="gradient-pro pointer-events-none absolute inset-0" aria-hidden="true"></div>

      <div className="container-max relative py-24 md:py-28 lg:py-32">
        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[0.18em] text-cyan-200/90 mb-3"
        >
          iPhone 16 Pro
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-[16ch] text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]"
        >
          Built for vision. Powered by speed.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mx-auto max-w-[50ch] text-white/75 mt-4 md:mt-5 text-base md:text-lg"
        >
          Aerospace-grade titanium. A17-class performance. Camera that sees in the dark. And battery that just keeps going.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#" className="rounded-full bg-white text-black text-sm md:text-base px-6 py-2.5 hover:bg-white/90 transition-colors">Learn more</a>
          <a href="#" className="rounded-full border border-white/30 text-white text-sm md:text-base px-6 py-2.5 hover:border-white/60 transition-colors">Buy</a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 md:mt-20"
        >
          <img
            src="/images/iphone-16-pro.jpg"
            alt="iPhone 16 Pro"
            className="mx-auto max-w-[900px] w-full drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        <p className="mt-6 text-xs text-white/50">Imagery is illustrative. This is a UI-only demo.</p>
      </div>
    </section>
  )
}