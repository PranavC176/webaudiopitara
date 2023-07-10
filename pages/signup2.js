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
                            <div style={{ fontFamily: 'arial', fontSize: '18px', color: 'white' }}>
                                <label style={{ paddingBottom: '10px' }}>What’s your date of birth?</label>
                                <input style={{ width: '100%', fontFamily: '30px' }} type='date' />
                            </div>

                            <div style={{ fontFamily: 'arial', fontSize: '18px', color: 'white' }}>
                                <div>
                                    <label style={{ paddingBottom: '10px' }}>What's your gender?</label>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }} className={styles.iconfieldtextname}>
                                    {/* <select className={styles.countryCodeSelect}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                  </select> */}
                                    <div className={styles.inner}>
                                        <input type="radio" value="male" name="gender" />&nbsp;<label for='male'>Male</label>

                                    </div>
                                    <div className={styles.inner}>
                                        <input type="radio" value="female" name="gender" />&nbsp;<label for='female'>Female</label>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.formtext} style={{ color: '#9C9C9C' }}>
                                <input type='checkbox' name='condition' />&nbsp;<span>I would prefer not to receive marketing messages from Audio Pitara</span>

                            </div>
                            <div style={{ color: '#9C9C9C' }}>
                                <input type='checkbox' name='condition' />&nbsp;<span>Share my registration data with Audio Pitara’s content providers for marketing purposes.</span>

                            </div>

                            <div style={{ background: 'rgba(218, 61, 38, 0.47) ', borderRadius: '20px', margin: 'auto' }}>
                                <input type="submit" style={{ background: 'rgba(218, 61, 38, 0.47)', color: 'white' }} value="Sign Up" />
                            </div>
                        </form>
                    </div>

                    <div className={styles.formtext}>
                        <span>Continue, if you agree the T&C and Privacy Policy</span>
                    </div>
                    <div>
                        <span className={styles.formtext} style={{ color: '#9C9C9C' }}>Already have an account?</span>&nbsp;<span className={styles.formtext} style={{ color: 'white' }}><a>Login Now</a></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default signup2