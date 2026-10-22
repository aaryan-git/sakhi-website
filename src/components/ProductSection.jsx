
import products from '../data/products.js'
import { ArrowUpRight } from 'lucide-react'

const instagramUrl = 'https://www.instagram.com/sakhi.by.aa/'

function ProductCard({ product }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f6eeee]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.label && (
          <span className="absolute left-3 top-3 bg-white/95 px-3 py-1 text-[10px] uppercase tracking-wider text-[#7A2946]">
            {product.label}
          </span>
        )}
      </div>

      <div className="pt-4">
        <p className="text-xs text-gray-500">{product.category}</p>

        <h3 className="mt-1 font-medium text-gray-800">
          {product.name}
        </h3>

        <p className="mt-2 font-semibold text-[#7A2946]">
          ₹{Number(product.price).toLocaleString('en-IN')}
        </p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 border border-[#7A2946] px-3 py-3 text-sm text-[#7A2946] transition hover:bg-[#7A2946] hover:text-white"
        >
          Enquire to Order <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  )
}

function ProductGroup({ title, subtitle, products, id }) {
  return (
    <div id={id} className="mx-auto max-w-7xl scroll-mt-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#7A2946]">
            {subtitle}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-[#542033] sm:text-4xl">
            {title}
          </h2>
        </div>

        <span className="text-sm text-gray-500">
          {products.length} styles
        </span>
      </div>

      {products.length === 0 ? (
        <p className="py-6 text-gray-500">
          New styles coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProductSection() {
  const kurtis = products.filter(
    (product) => product.category === 'Kurtis'
  )

  const sarees = products.filter(
    (product) => product.category === 'Sarees'
  )

  return (
    <section className="space-y-16 bg-[#fffaf8] px-5 py-16 sm:py-20">
      <ProductGroup
        id="kurtis"
        title="Our Kurtis"
        subtitle="Comfort & style"
        products={kurtis}
      />

      <ProductGroup
        id="sarees"
        title="Our Sarees"
        subtitle="Elegance in every drape"
        products={sarees}
      />
    </section>
  )
}
