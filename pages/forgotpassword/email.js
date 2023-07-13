import React from 'react';
import { useState } from 'react';
import styles from '@/styles/phone.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import Link from 'next/link';




const Login = () => {


    return (
        <>
            <Head>

            </Head>

            <div className={styles.loginmain}>
                <div className={styles.loginform}>
                    <div className={styles.loginhead}>
                        <div className={styles.formheading}>
                            <span>Forgot Password</span>
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
                    <div className={styles.info} style={{ textAlign: 'center' }}>
                        <span>Enter the email address that you used to register. We’ll send you an email with your username and a link to reset your password.</span>
                    </div>

                    <Form noValidate >

                        <Row className='mb-4' >
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername" >


                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    className={[styles.FormControl, styles.emailfeild]}

                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Email (example@gmail.com).
                                </Form.Control.Feedback>

                            </Form.Group>
                        </Row>

                        <div style={{ textAlign: 'center' }} className='mb-4' >
                            <span className={styles.formtext}>OR</span>
                        </div>

                        <Row className='mb-4' >
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername" >

                                <Link href='/forgotpassword/phone'>
                                    <Button className={[styles.FormControlEmail, styles.phone]} >
                                        <span className={styles.buttontextpassword}>Continue With Phone Number</span>
                                    </Button>
                                </Link>


                            </Form.Group>
                        </Row>

                        <div className={styles.submitbutton} >
                            <Button type="submit"
                                className={styles.passwordcontinue} >
                                Continue
                            </Button>

                        </div>

                    </Form>

                    <div>
                        <span className={styles.formtext} style={{ color: '#666' }}>Trouble resetting the password?</span>&nbsp;<span className={styles.formtext} style={{ color: 'white' }}><Link href='#'>Contact Support</Link></span>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Login;