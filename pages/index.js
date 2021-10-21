import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    
      <h1>Home</h1>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
     
    </div>
  )
}
