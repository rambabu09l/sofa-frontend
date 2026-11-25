import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Rhythm } from '@/components/Rhythm'
import { Board } from '@/components/Board'
import { Taste } from '@/components/Taste'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-svh">
      <Nav />
      <main>
        <Hero />
        <Rhythm />
        <Board />
        <Taste />
      </main>
      <Footer />
    </div>
  )
}
