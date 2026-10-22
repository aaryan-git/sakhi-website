
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CollectionSection from './components/CollectionSection'
import ProductSection from './components/ProductSection'
import BrandStory from './components/BrandStory'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf8] text-gray-800">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <CollectionSection />
        <ProductSection />
        <BrandStory />
      </main>

      <Footer />
    </div>
  )
}
