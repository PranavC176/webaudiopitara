import { showData2 } from '@/data';
import { useRouter } from 'next/router'
import styles from '@/styles/episode.module.css';
// import styles from '@/styles/show.module.css';
import React, { useState } from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Audiopitaracard2 from '@/components/Audiopitaracard2';

const Episode = () => {
    const router = useRouter();
    const { episodeId } = router.query;

    const show = showData2.find((item) => item.episodes.some((episode) => episode.id === Number(episodeId)));


    if (!show) {
        return <p>Show not found.</p>;
    }

    // Find the specific episode using the episodeId
    const episode = show ? show.episodes.find((episode) => episode.id === Number(episodeId)) : null;

    const [currentData, setCurrentData] = useState('data1');

    const handleButtonClick = (data) => {
        setCurrentData(data);
    };

    const showName = show.name.split(':')[0].trim();

    if (!episode) {
        return <p>Episode not found.</p>;
    }

    const MAX_DESCRIPTION_LENGTH = 200;

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 3
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const product2=showData2.map((item)=>(

        // <Link key={item.id} href={`/show/${item.id}`}>
            <Audiopitaracard2
            id={item.id}
        type={item.type}
        url={item.imageurl}
       
        description={item.description}
      />
    ))

    return (
        <div className={styles.main}>

        <div className={styles.chat}>
            <Image src='/message.svg' height='17' width='18' alt=''/>
        </div>

            <div className={styles.nav}>
                <Navbar />
            </div>
            <div className={styles.epiPath}>
                <span>Shows</span><Image src='/arrow.svg' alt='' height='16' width='16' />
                <span>{showName}</span><Image src='/arrow.svg' alt='' height='16' width='16' /><span>{episode.Name}</span>
            </div>
            <div className={styles.homepagemain}>


                <div className={styles.episodeleft}>
                    <div className={styles.episdoename}>
                        <p>{episode.Name}</p>
                    </div>
                    <div className={styles.showhead}>
                        <div className={styles.showimage}>
                            <Image src={episode.ImageURL} alt='poster' style={{ borderRadius: '10px' }} height='434' width='434' />
                        </div>
                        <div className={styles.sideicons} >
                            <div className={styles.showheadicons} >
                                <Image src='/message.svg' alt='' height='18' width='20' />
                            </div>
                            {/* <div className={styles.showheadicons} >
                  <Image src='/download.svg' height='19' width='15' />
                </div> */}
                            <div className={styles.showheadicons} >
                                <Image src='/share.svg' alt='' height='18' width='18' />
                            </div>
                            <div className={styles.showheadicons} >
                                <Image src='/add.svg' alt='' height='18' width='18' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.episodebottom}>
                        <div>
                            <span>{show.episodes.length}</span><span>Episodes</span>
                        </div>
                        <div>
                            <Image src='/listenerwhite.svg' height='24' width='24' alt='' /><span>1000</span>
                        </div>
                        <div>
                            <Image src='/mediaplay.svg' height='24' width='24' alt='' />
                            <span>Play all</span>
                        </div>
                    </div>
                </div>
                <div className={styles.episoderight}>
                    <div>
                        <div className={styles.rightButtons}>
                            {/* Buttons to change the data */}
                            <div onClick={() => handleButtonClick('data1')} className={styles.Details} style={{ background: currentData === 'data1' ? '#DA3D26' : 'var(--dark-button-bg, linear-gradient(132deg, #010243 0%, #01025C 100%))' }}>Details</div>
                            <div onClick={() => handleButtonClick('data2')} className={styles.AllEpisode} style={{ background: currentData === 'data2' ? '#DA3D26' : 'var(--dark-button-bg, linear-gradient(132deg, #010243 0%, #01025C 100%))' }}>All Episodes</div>
                            <div onClick={() => handleButtonClick('data3')} className={styles.Related}
                                style={{ background: currentData === 'data3' ? '#DA3D26' : 'var(--dark-button-bg, linear-gradient(132deg, #010243 0%, #01025C 100%))' }}
                            >Related</div>
                        </div>
                        {/* Section to display the content */}
                        <div className={styles.Data}>
                            {currentData === 'data1'
                                &&
                                <div className={styles.DetailsData}>
                                    <p className={styles.about}>About</p>
                                    <p className={styles.aboutdata}>{episode.Description}</p>
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
                                            <p>Duration</p>
                                            <p>01 Hrs 10 Mins</p>
                                        </div>
                                        <div className={styles.details}>
                                            <p>Release</p>
                                            <p>June 2023</p>
                                        </div>
                                    </div>
                                    <p className={styles.Credits}>Credits</p>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <div>
                                            <Image src='/artist.png' height='60' width='60' alt='' />
                                        </div>
                                        <div className={styles.artist}>
                                            <p>Ajay Singhal</p>
                                            <p>Voice artist</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {currentData === 'data2'
                                &&
                                <div className={styles.allepisode}>
                                    {show.episodes.map((episode) => (
                                        <Link key={episode.id} href={`/episode/${episode.id}`}>
                                            <div className={styles.episodesmain}>
                                                <div className={styles.episodes}>
                                                    <div>
                                                        <Image style={{ borderRadius: '5px' }} alt={episode.Name} src={episode.ImageURL} height='110' width='110' />
                                                    </div>

                                                    <div className={styles.episodedetails}>
                                                        <span>{episode.Name}</span>
                                                        <span>{episode.Description.substring(0, MAX_DESCRIPTION_LENGTH) + '.....'}</span>
                                                        <div className={styles.timediv}>
                                                            <Image src='/time.svg' alt='time' height='16' width='16' />
                                                            <span>10 Minutes</span>
                                                            <Image src='/listener.svg' alt='time' height='16' width='16' />
                                                            <span>1000</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>

                                    ))}
                                </div>
                            }
                            {currentData === 'data3'
                                &&
                                <>
                                <div style={{padding:'20px',paddingBottom:'0px'}}>
                                    <div className={styles.info}>
                                        <div className={styles.showinfo}>
                                            <p>You might also like </p>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '-60px' }}>
                                        <Carousel  className={styles.slide} responsive={responsive2} showDots={false} arrows={false} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
                                            {
                                                product2
                                            }
                                        </Carousel>
                                    </div>
                                </div>
                                <p className={styles.topP}>Top Performing Episodes</p>
                                <div className={styles.allepisode} style={{height:'160px',paddingTop:'0px'}}>
                                    {show.episodes.map((episode) => (
                                        <Link key={episode.id} href={`/episode/${episode.id}`}>
                                            <div className={styles.episodesmain}>
                                                <div className={styles.episodes}>
                                                    <div>
                                                        <Image style={{ borderRadius: '5px' }} alt={episode.Name} src={episode.ImageURL} height='110' width='110' />
                                                    </div>

                                                    <div className={styles.episodedetails}>
                                                        <span>{episode.Name}</span>
                                                        <span>{episode.Description.substring(0, MAX_DESCRIPTION_LENGTH) + '.....'}</span>
                                                        <div className={styles.timediv}>
                                                            <Image src='/time.svg' alt='time' height='16' width='16' />
                                                            <span>10 Minutes</span>
                                                            <Image src='/listener.svg' alt='time' height='16' width='16' />
                                                            <span>1000</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>

                                    ))}
                                </div>
                                </>

                            }
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Episode