import React from 'react';
import { useState } from 'react';
import styles from '@/styles/login.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/components/Nav';




const Login = () => {


  return (
    <>
      <Head>

      </Head>
      <Nav/>
      <div className={styles.loginmain}>
     
        <div className={styles.loginform}>
          <div className={styles.loginhead}>
            <div className={styles.formheading}>
              <span>Login to Audio Pitara</span>
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
          <Form noValidate >
            
             <Row className='mb-4' >
              <Form.Group as={Col} md="12" controlId="validationCustomUsername" >

                    <Link href='#'>
                    <Button className={[styles.FormControl,styles.google]} >
                                    <span className={styles.buttontext}>Continue With Google</span>
                    </Button>
                    </Link>
                
                
              </Form.Group>
            </Row>
            <Row className='mb-4' >
              <Form.Group as={Col} md="12" controlId="validationCustomUsername" >

              <Link href='#'>
                    <Button className={[styles.FormControl,styles.facebook]} >
                                    <span className={styles.buttontext}>Continue With Facebook </span>
                    </Button>
                    </Link>
                
              </Form.Group>
            </Row>
            <Row className='mb-4' >
              <Form.Group as={Col} md="12" controlId="validationCustomUsername" >

              <Link href='/login/phone'>
                    <Button  className={[styles.FormControl,styles.phone]} >
                                    <span className={styles.buttontext}>Continue With Phone </span>
                    </Button>
                    </Link>
                
              </Form.Group>
            </Row>
            <Row className='mb-4' >
              <Form.Group as={Col} md="12" controlId="validationCustomUsername" >

              <Link href='/login/email'>
                    <Button  className={[styles.FormControl,styles.email]} >
                    <span className={styles.buttontext}>Continue With Email</span>
                    </Button>
                    </Link>
                
              </Form.Group>
            </Row>
            
            
          </Form>
          <div className={styles.formtext}>
            <span>Continue, if you agree the <u>T&C</u> and <u>Privacy Policy</u></span>
          </div>
          <div>
            <span className={styles.formtext} style={{ color: '#666' }}>New to Audio Pitara?</span>&nbsp;<span className={styles.sign}><Link href='/signup'>Sign Up Now</Link></span>
          </div>
        </div>
      </div>

    </>
  )

}
export default Login;