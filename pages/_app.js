import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

// after calling LogRocket.init()
// setupLogRocketReact(LogRocket);


export default function App({ Component, pageProps }) {
 
  return (
    <>
      <Head>
      <title>Audio Pitara</title>
      <link rel="icon" href="Audiopitara Icon.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      
        
      
     
     
      <Component {...pageProps} />
      <ToastContainer/>

    </>
  )
}
