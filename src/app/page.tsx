"use client"
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </main>
  )
}