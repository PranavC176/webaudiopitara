import React from 'react'
import Image from 'next/image'
import styles from '@/styles/nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    
    <div className={styles.nav}>
        <Link href='/'>
        <img src='/logo.svg'></img>
        </Link>
    </div>
  )
}

export default Nav