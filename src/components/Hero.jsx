
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[480px] items-center overflow-hidden bg-[#f5e6e8] sm:min-h-[560px]"
    >
      <img
        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=85"
        alt="Elegant Indian ethnic fashion"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#fff7f2]/95 via-[#fff7f2]/75 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7A2946] sm:text-sm">
          Made for your beautiful moments
        </p>

        <h1 className="max-w-xl font-serif text-5xl leading-tight text-[#542033] sm:text-6xl lg:text-7xl">
          Tradition, with a touch of you.
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-gray-700 sm:text-base">
          Discover ethnic styles made to celebrate your everyday
          elegance and special occasions.
        </p>

        <a
          href="#collections"
          className="mt-8 inline-flex items-center bg-[#7A2946] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#5d1d34]"
        >
          Explore Collection
        </a>
      </div>
    </section>
  )
}
