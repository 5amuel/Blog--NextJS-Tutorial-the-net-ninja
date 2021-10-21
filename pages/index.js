import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    
      <h1 className={styles.title} >Home</h1>
      <p className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra tristique viverra. Nullam id sagittis nunc, sit amet ornare urna. Pellentesque scelerisque quis eros eget egestas. Maecenas non enim at nibh pulvinar finibus non a lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra tristique viverra. Nullam id sagittis nunc, sit amet ornare urna. Pellentesque scelerisque quis eros eget egestas. Maecenas non enim at nibh pulvinar finibus non a lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec.</p>
      
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
     
    </div>
  )
}
