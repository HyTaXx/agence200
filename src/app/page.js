import { Header } from '../components/header/header'
import { Hero } from '../components/hero/hero'
import { Trust } from '../components/trust/trust'

export default function Home() {
  return (
    <>
      <main className='bg-[#FFFCF2]'>
        <Header />
        <Hero />
        <Trust />
      </main>
    </>
  )
}
