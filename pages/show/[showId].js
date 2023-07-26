
import React from 'react'
import styles from '@/styles/show.module.css';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { showData2 } from '@/data'; 
import Image from 'next/image';
import Link from 'next/link';

//import { productData } from '@/data';


const Show = () => {

  const router = useRouter();
  const { showId } = router.query; //Get the productId from the query parameters

  // Fetch the show data based on the showId
  const show = showData2.find((item) => item.id === Number(showId));



  return (
    <div>
      {show ? (
        <div className={styles.main}>

          <div className={styles.nav}>
            <Navbar />
          </div>

          <div className={styles.homepagemain}>

            <div className={styles.showhead}>
              <div className={styles.showimage}>
                <Image src={show.banner} alt='poster' height='230' width='409' />
              </div>
              <div style={{ justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex', flexDirection: 'column' }}>
                <div className={styles.showheadicons} >
                  <Image src='/message.svg' height='18' width='20' />
                </div>
                {/* <div className={styles.showheadicons} >
                  <Image src='/download.svg' height='19' width='15' />
                </div> */}
                <div className={styles.showheadicons} >
                  <Image src='/share.svg' height='18' width='18' />
                </div>
                <div className={styles.showheadicons} >
                  <Image src='/add.svg' height='18' width='18' />
                </div>
              </div>
              <div className={styles.showinfo}>
                <p className={styles.showname}>{show.name}</p>
                <p className={styles.showdescription}>{show.description}</p>
                <div className={styles.infobutton} >
                  <div className={styles.follow}>
                    <Image src='/read.svg' width='20' height='20' />
                    <span >Read Full</span>
                  </div>
                  <div className={styles.follow2}>
                    <Image src='/follow.svg' width='20' height='20' />
                    <span >Follow</span>
                  </div>
                  <div className={styles.follow2}>
                    <Image src='/follow.svg' width='20' height='20' />
                    <span >Credits</span>
                  </div>
                </div>
                <div className={styles.showdetails}>
                  <div className={styles.details}>
                    <p>Reviews</p>
                    <p>124 Reviews</p>
                  </div>
                  <div className={styles.details}>
                    <p>Category</p>
                    
                      <p >{show.type}</p>
                    

                  </div>
                  <div className={styles.details}>
                    <p>Language</p>
                    <p>Hindi</p>
                  </div>
                  <div className={styles.details}>
                    <p>Duration</p>
                    <p>01 Hrs 10 Mins</p>
                  </div>
                  <div className={styles.details}>
                    <p>Release</p>
                    <p>June 2023</p>
                  </div>
                </div>
              </div>
            </div>
              
            <div className={styles.episodedata}>
              <div className={styles.episodehead}>
                <span >All Episode</span>
                <span >( {show.episodes.length} Episodes )</span>  
              </div>
              <div className={styles.allepisode}>
                   {show.episodes.map((episode) => (
                    <Link key={episode.id} href={`/episode/${episode.id}`}>    
               <div className={styles.episodesmain}>
               <div  className={styles.episodes}>
              <div>
                  <Image style={{borderRadius:'5px'}} alt={episode.Name}  src={episode.ImageURL} height='110' width='110'/>    
              </div>
        
              <div className={styles.episodedetails}>
                <span>{episode.Name}</span>
                <span>{episode.Description}</span>
                <div className={styles.timediv}>
                  <Image src='/time.svg' alt='time' height='16' width='16'/>
                  <span>10 Minutes</span>
                  <Image src='/listener.svg' alt='time' height='16' width='16'/>
                  <span>1000</span>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                <Image src='/like.svg' height='30' width='30'/>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                <Image src='/mediaplay.svg' height='30' width='30'/>
              </div>
              </div>
              </div>
              </Link>
              
                    ))}      
                    </div>
            </div>

            <div>
              
            </div>
          </div>
        </div>
      ) : (
        <p>Show not found.</p>
      )}
    </div>
  )
}


export default Show;