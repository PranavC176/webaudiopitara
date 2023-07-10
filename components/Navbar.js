import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const navbar = () => {
  return (
    <div className={styles.nav}>
        <Image
        src='/Audio Pitara Logo.png'
        width={112}
        height={43}
        />
    </div>
  )
}

export default navbar