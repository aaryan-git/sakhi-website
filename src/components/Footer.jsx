
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#542033] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <a
            href="#home"
            className="text-2xl font-semibold tracking-[0.16em]"
          >
            SAKHI
          </a>

          <p className="mt-1 text-xs tracking-widest text-white/70">
            BY AMISHA AMRUTA
          </p>

          <p className="mt-3 text-sm text-white/80">
            The Thread of Friendship
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-sm text-white/80 sm:items-end">
          <a
            href="https://www.instagram.com/sakhi.by.aa/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Sakhi on Instagram"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/50 text-xs font-bold">
              IG
            </span>
            @sakhi.by.aa
            <ArrowUpRight size={16} />
          </a>

          <p>Pan India Delivery | 7–8 working days</p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-5 text-center text-xs text-white/60">
        Copyright {new Date().getFullYear()} SAKHI by Amisha Amruta. All rights reserved.
      </div>
    </footer>
  )
}
