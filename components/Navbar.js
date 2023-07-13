import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className={styles.nav}>
        <Link href='/'><Image
        src='/Audio Pitara Logo with Tagline.png'
        width={112}
        height={50}
        />
        </Link>
    </div>
  )
}

export default navbar