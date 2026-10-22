
import { ArrowUpRight } from 'lucide-react'

const instagramUrl = 'https://www.instagram.com/sakhi.by.aa/'

const collections = [
  {
    title: 'Kurtis',
    subtitle: 'Comfort meets everyday elegance',
    description:
      'Discover beautiful styles made for everyday moments and special occasions.',
    image:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=1000&q=85',
    link: '#kurtis',
  },
  {
    title: 'Sarees',
    subtitle: 'Timeless grace',
    description:
      'Explore elegant drapes that bring tradition and modern style together.',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    link: '#sarees',
  },
]

export default function CollectionSection() {
  return (
    <section
      id="collections"
      className="bg-[#fffaf8] px-5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7A2946]">
            Find your style
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#542033] sm:text-4xl">
            Explore Our Collections
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            From everyday favourites to timeless traditional wear,
            find something special at SAKHI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {collections.map((collection) => (
            <a
              key={collection.title}
              href={collection.link}
              className="group relative block overflow-hidden bg-[#f6eeee]"
            >
              <div className="aspect-[4/5] overflow-hidden sm:aspect-[4/5]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                  {collection.subtitle}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    {collection.title}
                  </h3>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 transition group-hover:bg-white group-hover:text-[#542033]">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
                  {collection.description}
                </p>

                <span className="mt-5 inline-block border-b border-white/70 pb-1 text-sm">
                  Explore Collection
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#7A2946] px-6 py-3 text-sm text-[#7A2946] transition hover:bg-[#7A2946] hover:text-white"
          >
            Follow @sakhi.by.aa
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
