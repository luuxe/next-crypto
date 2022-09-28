import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PedroTech Next Tutorial</title>
      </Head>
      <Link href='/about'>About</Link>
      <h1 className={styles.homePageTitle}>hello world</h1>
    </div>
  )
}
