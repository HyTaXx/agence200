import { Header } from '../components/header/header'
import { Hero } from '../components/hero/hero'
import { Trust } from '../components/trust/trust'
import { Home_main } from '../components/home_main/home_main'
import { Footer } from '../components/footer/footer'

export default function Home() {
  return (
    <>
      <main className='bg-[#FFFCF2]'>
        <Header />
        <Hero />
        <Trust />
        <Home_main />
        <Footer />
      </main>
    </>
  )
}
