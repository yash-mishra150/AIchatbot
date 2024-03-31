import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Homepage from '../components/Homepage/Homepage'
import Login from './Login/page'


export default function Home() {
  return (
    <main className=''>
      <Navbar/>
      <Homepage />
    </main>
  )
}
