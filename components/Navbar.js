import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className={styles.main}>
    <div className={styles.nav}>
        <Link href='/'>
        <img src='/logo.svg' alt='logo'></img>
        </Link>
    </div>
    <div>
      <input
        type='text'
        placeholder='Search'
        className={styles.searchbar}
      />
    </div>
    <div className={styles.menu}>
    <div>
    <button className={styles.homebutton}>Home</button>
    </div>
    <div>
    <button className={styles.librarybutton}>library</button>
    </div>
    <div>
    <span className={styles.coins}>100 Coins</span>
    </div>
    <div className={styles.user}>
      <Image
        src='/user.png'
        width='40'
        height='40'
        alt='User'
      />
    </div> 
    </div>
    </div>
  )
}

export default navbar