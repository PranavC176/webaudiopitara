import React from 'react'
import { styled } from 'styled-components';
import styles from '@/styles/audiopitaracard2.module.css'
import Link from 'next/link';

export default function Audiopitaracard2 (props) {
  //const {jawSummary} = actualData;
  return (
      <Wrapper className={styles.main}>
      <Link key={props.id} href={`/show/${props.id}`}>
      <div className={styles.shows}>
          <div className={styles.container} >
              
                  <div className={styles.bannerimage}>
                      <figure>
                          <img src={props.url} alt="BannerName"  height='184' width='184'/>
                      </figure>
                  </div>
                  <p>{props.type}</p>
                  <p>{props.time}</p>
                  
                  {/* <h4>{jawSummary.title}</h4>
                  <p>{jawSummary.synopsis}</p> */}
              </div>
          </div>
          </Link>
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
    flex-direction: column;
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
      height: auto;
      border-radius: 5px;
    }
  }
  
  

  h4{
    color: rgba(255,255,255,0.98);
    text-transform: uppercase;
   
  }

  p {
   
font-family: Arial;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom:5px;
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