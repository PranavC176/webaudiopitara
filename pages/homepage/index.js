
import React from 'react'
import styles from '@/styles/homepage.module.css';
import Navbar from '@/components/Navbar';
import { useState,useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Audiopitaracard from '@/components/Audiopitaracard';
import Image from 'next/image';
import Audiopitaracard2 from '@/components/Audiopitaracard2';
import { episodeData2, productData, showData, showData2 } from '@/data';
import Link from 'next/link';
//import { productData } from '@/data';


const Homepage = () =>  {
 
//   const [myData, setMyData] = useState([]);
  const[visible,setvisible] =useState(true)


//   const productData = [
//     {
//       id: 1,
//       imageurl:
//         "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "Colorful sneakers",
//       description: "Some text about the product..",
//     },
//     {
//       id: 2,
//       imageurl:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       name: "Sport sneakers",
//       description: "Some text about the product..",
//     },
//     {
//       id: 3,
//       imageurl:
//         "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "iWatch",
//       description: "Some text about the product..",
//     },
//     {
//       id: 4,
//       imageurl:
//         "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "Water Bottle",
//       description: "Some text about the product..",
//     },
//     {
//       id: 5,
//       imageurl:
//         "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "Vans sneakers",
//       description: "Some text about the product..",
//     },
//     {
//       id: 6,
//       imageurl:
//         "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "Coco Noir",
//       description: "Some text about the product..",
//     },
//     {
//       id: 7,
//       imageurl:
//         "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "Sunglasses",
//       description: "Some text about the product..",
//     },
//     {
//       id: 8,
//       imageurl:
//         "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       name: "Dove cream",
//       description: "Some text about the product..",
//     },
//   ];
  

  const product = showData.map((item) => (
    <Audiopitaracard
      id={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      
    />
  ));

  const product2=showData2.map((item)=>(

    // <Link key={item.id} href={`/show/${item.id}`}>
        <Audiopitaracard2
        id={item.id}
    type={item.type}
    url={item.imageurl}
    time={item.time}
    description={item.description}
  />
  
// </Link>
  ))

//   //let isAdBoxVisible = true; 
  

//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '7f7d8fff60msh4da5e9a19d90978p11128fjsn5230c7177874',
//           'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//       }
//   };

//   const fetchData = async () => {
//       try {
//           const res = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
//           const data = await res.json();
//           console.log(data)
//           setMyData(data.titles)
//       } catch (e) {
//           console.log(e)
//       }
//   }

//   useEffect(() => {
//       fetchData()
//   }, [])

  const responsive = {
      superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: {max: 4000, min: 3000},
          items: 5
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

  const responsive2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 6
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

const handleCloseButtonClick = () => {
    
    setvisible(false);
  };

  
 
  
  return(
   <div className={styles.main}>
   <div  className={styles.nav}>
   <Navbar/>
   </div>
  <div className={styles.homepagemain}>
   {visible && (
        <div className={styles.adbox}>
          <div>
            <Image src="/AudiopitaraIconColor.png" alt='audiopitara' width="23" height="23" />
            <span>Get the Audio Pitara app today and unlock a world of audio wonders!</span>
          </div>
          <div className={styles.adpic}>
            <Image src="/GooglePlay.svg" width="109" height="33" alt='GooglePlay' />
            <Image src="/AppStore.svg" width="109" height="33" alt='AppStore' />
            <button className={styles.closebutton} onClick={handleCloseButtonClick}><Image src='/close.svg' height='24' width='24'/></button>
          </div>
          
          
          
        </div>
      )}


  <div style={{padding:'20px'}}>
  
  <Carousel responsive={responsive} showDots={true} arrows={false} customTransition={'transform 1000ms ease-in-out'} autoPlay={true} >

      {
        product 
      }
  </Carousel>
  </div>
  <div  className={styles.info}>
    <Image src='/user.png' alt='UserImage' height='50' width='50'/>
    <div className={styles.userinfo}>
    <p>AUDIO SHOWS TO GET YOU STARTED</p>
      <p className={styles.showinfo}>Welcome, John</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={false} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
    <div className={styles.showinfo}>
      <p>New Releases</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p>Continue Listening</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p>My Playlist</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p>Trending Now</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p>Top 10 Shows</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p>Top Searches</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p >New Releases</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

<div className={styles.info}>
<div className={styles.showinfo}>
      <p>New Releases</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>


<div className={styles.info}>
<div className={styles.showinfo}>
      <p >New Releases</p>
    </div>
  </div>
  <div style={{padding:'20px',marginTop:'-60px'}}>
  <Carousel responsive={responsive2}  showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={false} >
{
  product2
}
</Carousel>
</div>

   {/* <Carousel responsive={responsive} showDots={false} arrows={true} customTransition={'transform 1000ms ease-in-out'} className={styles.Carousel}
 >

      {
          myData.map((curElem) => {
              return <Audiopitaracard2 key={curElem.summary.id} actualData={curElem}/>
          })
      }

  </Carousel> */}
  </div>
  </div>
  )
}


export default Homepage;