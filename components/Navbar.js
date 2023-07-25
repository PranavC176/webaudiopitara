import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className={styles.nav}>
        <Link href='/'>
        <img src='/logo.svg'></img>
        <h2>Testing DevOps</h2>
        </Link>
    </div>
  )
}

export default navbar