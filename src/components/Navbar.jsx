
import { ShoppingBag, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfe2] bg-[#fffaf8]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="leading-tight">
          <span className="block text-2xl font-semibold tracking-[0.16em] text-[#7A2946]">
            SAKHI
          </span>
          <span className="text-[10px] tracking-[0.25em] text-gray-600">
            BY AMISHA AMRUTA
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-700 md:flex">
          <a href="#home" className="hover:text-[#7A2946]">Home</a>
          <a href="#collections" className="hover:text-[#7A2946]">Collections</a>
          <a href="#kurtis" className="hover:text-[#7A2946]">Kurtis</a>
          <a href="#sarees" className="hover:text-[#7A2946]">Sarees</a>
          <a href="#about" className="hover:text-[#7A2946]">Our Story</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#kurtis"
            aria-label="Browse products"
            className="text-[#7A2946] transition hover:scale-110"
          >
            <ShoppingBag size={22} />
          </a>

          <a
            href="#collections"
            aria-label="Browse collections"
            className="md:hidden text-[#7A2946]"
          >
            <Menu size={24} />
          </a>
        </div>
      </nav>
    </header>
  )
}
