import React, { useRef, useState,useEffect} from 'react'
import { styled } from 'styled-components';
import styles from '@/styles/audiopitaracard.module.css'
import AudioPlayer from 'react-h5-audio-player';

export default function Audiopitaracard(props) {
  //const {jawSummary} = actualData;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleBannerHover = () => {
    setIsHovering(true);
    // Play the audio when hovering over the banner image
    if (audioRef.current && !isPlaying) {
      audioRef.current.audio.current.currentTime = 0; // Start from the beginning when hovering
      audioRef.current.audio.current.play();
      setIsPlaying(true);
    }
  };

  const handleBannerLeave = () => {
    // Pause the audio when leaving the banner image
    if (audioRef.current && isPlaying) {
      audioRef.current.audio.current.pause();
      setIsPlaying(false);
       setIsHovering(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.audio.current.pause();
      }
    };
  }, []);

  return (
    <Wrapper className={styles.main}>
      <div className={styles.container}>

        <div className={styles.bannerimage}
        onMouseOver={handleBannerHover}
        onMouseLeave={handleBannerLeave}
        >
          <figure>
            <img src={props.url} alt="BannerImage" height='184' width='184' />
          </figure>
        </div>
        <div className={styles.banneraudio}
        style={{ display: isHovering ? 'block' : 'none' }}
        >

          <AudioPlayer
         
            src="/paru.mp3"
            ref={audioRef}
           
            showJumpControls={false}
            showSkipControls={false}
            showFilledVolume={false}
            showLoopControl={true}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          // other props here
          />
        </div>

        {/* <h4>{jawSummary.title}</h4>
                    <p>{jawSummary.synopsis}</p> */}
      </div>


    </Wrapper>
  );
};


const Wrapper = styled.section`
 


  .container {
    ${'' /* backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    
    filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125)); */}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    text-align: center;
    

  }

  ${'' /* .wrapper {
    width: 100%;
    height: 100%;
  } */}

  .banner-image {
    height:auto;
    width: 100%;
    overflow:hidden;
    
    img{
      width: 100%;
      height: 300px;
      border-radius: 12px;
    }
  }
  
  

  h4{
    color: rgba(255,255,255,0.98);
    text-transform: uppercase;
   
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 2px;    
  }

  .button-wrapper{
    margin-top: 18px;
  }

  .outline {
    background: transparent;
    color: rgba(0, 212, 255, 0.9);
    border: 1px solid rgba(0, 212, 255, 0.6);
    transition: all .3s ease;

  }

  .outline:hover{
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
    transition: all .3s ease;
  }

  .fill {
    background: rgba(0, 212, 255, 0.9);
    color: rgba(255,255,255,0.95);
    filter: drop-shadow(0);
    font-weight: bold;
    transition: all .3s ease;
  }

  .fill:hover{
    transform: scale(1.125);
    border-color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
    transition: all .3s ease;
  }
`