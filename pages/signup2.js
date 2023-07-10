import React from 'react'
import styles from '@/styles/signup2.module.css'
import Head from 'next/head'


const signup2 = () => {
  return (
    <>
      <Head>
      </Head>

      <div className={styles.signup2main}>
        <div className={styles.signup2form}>
          <div className={styles.signup2head}>
            <div className={styles.formheading}>
              <span>Sign Up</span>
            </div>

            <div className={styles.info}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M6 10.5V8.5C6 5.19 7 2.5 12 2.5C17 2.5 18 5.19 18 8.5V10.5" stroke="#61FF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 22.5H7C3 22.5 2 21.5 2 17.5V15.5C2 11.5 3 10.5 7 10.5H17C21 10.5 22 11.5 22 15.5V17.5C22 21.5 21 22.5 17 22.5Z" stroke="#61FF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.9965 16.5H16.0054" stroke="#61FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9945 16.5H12.0035" stroke="#61FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.99451 16.5H8.00349" stroke="#61FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span >Your Information is safe with us</span>
            </div>
          </div>
          <div>
            <form className={styles.signup2formfield}>
              <div style={{ fontFamily:'arial',fontSize:'18px',color:'white'}}>
                <label style={{paddingBottom:'10px'}}>What’s your date of birth?</label>
                <input style={{width:'100%',fontFamily:'30px'}} type='date' />
              </div>
              <div style={{ fontFamily:'arial',fontSize:'18px',color:'white'}}>
                <label style={{paddingBottom:'10px'}}>What's your gender?</label>
                <div className={styles.countryCodeContainer}>
                  <select className={styles.countryCodeSelect}>
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
              </div>
            
              <div className={styles.iconfield}>
                <div class="" style={{ width: '10%' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                    <path d="M7.91872 3.94807C7.66561 3.31531 7.05276 2.90039 6.37126 2.90039H4.07895C3.20692 2.90039 2.5 3.60714 2.5 4.47917C2.5 11.8914 8.50898 17.9004 15.9212 17.9004C16.7933 17.9004 17.5 17.1934 17.5 16.3214L17.5004 14.0287C17.5004 13.3472 17.0856 12.7344 16.4528 12.4813L14.2558 11.6028C13.6874 11.3755 13.0402 11.4778 12.57 11.8697L12.0029 12.3426C11.3407 12.8945 10.3664 12.8506 9.75683 12.241L8.16019 10.6429C7.55066 10.0334 7.50561 9.05984 8.05745 8.39763L8.53027 7.83064C8.92218 7.36035 9.02541 6.71302 8.79805 6.14463L7.91872 3.94807Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className={styles.countryCodeContainer}>
                  <select className={styles.countryCodeSelect}>
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
                <div className={styles.iconfieldtext} style={{ width: '90%' }}>

                  <input type="text" className={styles['form-control']} placeholder="Phone Number" />
                </div>
              </div>
              
              <div style={{ background: 'rgba(218, 61, 38, 0.47) ', borderRadius: '20px' }}>
                <input type="submit" style={{ background: 'rgba(218, 61, 38, 0.47)', color: 'white' }} value="Sign Up" />
              </div>
            </form>
          </div>

          <div className={styles.formtext}>
            <span>Continue, if you agree the T&C and Privacy Policy</span>
          </div>
          <div>
            <span className={styles.formtext} style={{ color: '#666' }}>Already have an account?</span>&nbsp;<span className={styles.formtext} style={{ color: 'white' }}><a>Login Now</a></span>
          </div>
        </div>
      </div>

    </>
  )
}

export default signup2