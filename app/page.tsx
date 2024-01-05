import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Homepage from '../components/Homepage/Homepage'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homepage />
    </main>
  )
}
