import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import StudentBranch from '@/components/student-branch'
import Council from '@/components/council'
import Events from '@/components/events'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <StudentBranch />
      <Council />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}
