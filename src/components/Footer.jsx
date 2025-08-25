
import React from 'react'

const cols = [
  {
    title: 'Shop and Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories']
  },
  {
    title: 'Apple Wallet',
    links: ['Wallet', 'Apple Pay']
  },
  {
    title: 'Account',
    links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
  },
  {
    title: 'About Apple',
    links: ['Newsroom', 'Career Opportunities', 'Ethics & Compliance', 'Events']
  }
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container-max py-12">
        <p className="text-xs text-white/60">
          More ways to shop: Visit an Apple Store, call 1‑800‑MY‑APPLE, or find a reseller. This is an educational clone for UI practice.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-8">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {col.links.map((l) => <li key={l}><a className="hover:text-white" href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-xs text-white/50 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} Apple Clone. All rights reserved.</p>
          <ul className="flex gap-4">
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">Terms of Use</a></li>
            <li><a className="hover:text-white" href="#">Sales and Refunds</a></li>
            <li><a className="hover:text-white" href="#">Legal</a></li>
            <li><a className="hover:text-white" href="#">Site Map</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
