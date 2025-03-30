import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import ProjectGrid from "@/components/ProjectGrid"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  )
}

