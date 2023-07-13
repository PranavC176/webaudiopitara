import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className={styles.nav}>
        <Link href='/'>
        <img src='/logo.svg'></img>
        </Link>
    </div>
  )
}

export default navbar