import React from 'react';
import { useState } from 'react';
import styles from '@/styles/signup.module.css';
import Head from 'next/head';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router';
import Link from 'next/link';





const Signup = () => {
  const [validated, setValidated] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
    }
    else{
      router.push('/signup2');
    }
    setValidated(true); 
  };
  
  return (
    <>
      <Head>
      
      </Head>

      <div className={styles.signupmain}>
        <div className={styles.signupform}>
          <div className={styles.signuphead}>
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
          <div >
            {/* <Form className={styles.signupformfield}  noValidate validated={validated} onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '10px' }} className={styles.iconfieldtextname}>
                <div style={{ width: '50%' }}>
                  <input type="text" className={styles['form-control']} placeholder="First name" required />
                </div>
                <div style={{ width: '50%' }}>
                  <input type="text" className={styles['form-control']} placeholder="Last name" required />
                </div>
              </div>
              <div className={styles.iconfield}>
                <div class="" style={{ width: '10%' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path d="M5.25 7.5L12.8845 13.2653L12.8871 13.2674C13.7348 13.8891 14.1589 14.2001 14.6234 14.3203C15.034 14.4265 15.4656 14.4265 15.8762 14.3203C16.3412 14.2 16.7665 13.8881 17.6157 13.2653C17.6157 13.2653 22.5126 9.50742 25.25 7.5M4 19.7502V10.2502C4 8.85011 4 8.14953 4.27248 7.61475C4.51217 7.14434 4.89434 6.76217 5.36475 6.52248C5.89953 6.25 6.60011 6.25 8.00024 6.25H22.5002C23.9004 6.25 24.5995 6.25 25.1342 6.52248C25.6047 6.76217 25.9881 7.14434 26.2278 7.61475C26.5 8.149 26.5 8.84874 26.5 10.2461V19.7545C26.5 21.1519 26.5 21.8506 26.2278 22.3849C25.9881 22.8553 25.6047 23.2381 25.1342 23.4778C24.6 23.75 23.9013 23.75 22.5039 23.75H7.99614C6.59874 23.75 5.899 23.75 5.36475 23.4778C4.89434 23.2381 4.51217 22.8553 4.27248 22.3849C4 21.8501 4 21.1504 4 19.7502Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className={styles.iconfieldtext} style={{ width: '90%' }}>
                  <input type="Email" className={styles['form-control']} placeholder="Email Address" required />
                </div>
              </div>
              <div className={styles.iconfield}>
                <div class="" style={{ width: '10%' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                    <path d="M7.91872 3.94807C7.66561 3.31531 7.05276 2.90039 6.37126 2.90039H4.07895C3.20692 2.90039 2.5 3.60714 2.5 4.47917C2.5 11.8914 8.50898 17.9004 15.9212 17.9004C16.7933 17.9004 17.5 17.1934 17.5 16.3214L17.5004 14.0287C17.5004 13.3472 17.0856 12.7344 16.4528 12.4813L14.2558 11.6028C13.6874 11.3755 13.0402 11.4778 12.57 11.8697L12.0029 12.3426C11.3407 12.8945 10.3664 12.8506 9.75683 12.241L8.16019 10.6429C7.55066 10.0334 7.50561 9.05984 8.05745 8.39763L8.53027 7.83064C8.92218 7.36035 9.02541 6.71302 8.79805 6.14463L7.91872 3.94807Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className={styles.countryCodeContainer}>
                  <select className={styles.countryCodeSelect} required>
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                    
                  </select>
                </div>
                <div className={styles.iconfieldtext} style={{ width: '90%' }}>

                  <input type="text" className={styles['form-control']} placeholder="Phone Number" required />
                </div>
              </div>
              <div className={styles.iconfield}>
                <div class="" style={{ width: '10%' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                    <path d="M15.0013 12.9004H15.8346M7.5013 12.9004H12.5013M5.0013 12.9004H4.16797M4.16797 10.4004H15.8346M4.16797 7.90039H15.8346M1.66797 12.7339V8.06722C1.66797 7.1338 1.66797 6.66674 1.84962 6.31022C2.00941 5.99662 2.2642 5.74184 2.5778 5.58205C2.93432 5.40039 3.40138 5.40039 4.3348 5.40039H15.6681C16.6016 5.40039 17.0676 5.40039 17.4241 5.58205C17.7377 5.74184 17.9934 5.99662 18.1532 6.31022C18.3346 6.66639 18.3346 7.13289 18.3346 8.06448V12.7363C18.3346 13.6679 18.3346 14.1337 18.1532 14.4899C17.9934 14.8035 17.7377 15.0591 17.4241 15.2189C17.068 15.4004 16.6021 15.4004 15.6705 15.4004H4.33206C3.40046 15.4004 2.93397 15.4004 2.5778 15.2189C2.2642 15.0591 2.00941 14.8035 1.84962 14.4899C1.66797 14.1334 1.66797 13.6673 1.66797 12.7339Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className={styles.iconfieldtext} style={{ width: '90%' }}>
                  <input type="Password" className={styles['form-control']} placeholder="Password" required />
                </div>
              </div>
              <div className={styles.iconfield}>
                <div class="" style={{ width: '10%' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                    <path d="M15.0013 12.9004H15.8346M7.5013 12.9004H12.5013M5.0013 12.9004H4.16797M4.16797 10.4004H15.8346M4.16797 7.90039H15.8346M1.66797 12.7339V8.06722C1.66797 7.1338 1.66797 6.66674 1.84962 6.31022C2.00941 5.99662 2.2642 5.74184 2.5778 5.58205C2.93432 5.40039 3.40138 5.40039 4.3348 5.40039H15.6681C16.6016 5.40039 17.0676 5.40039 17.4241 5.58205C17.7377 5.74184 17.9934 5.99662 18.1532 6.31022C18.3346 6.66639 18.3346 7.13289 18.3346 8.06448V12.7363C18.3346 13.6679 18.3346 14.1337 18.1532 14.4899C17.9934 14.8035 17.7377 15.0591 17.4241 15.2189C17.068 15.4004 16.6021 15.4004 15.6705 15.4004H4.33206C3.40046 15.4004 2.93397 15.4004 2.5778 15.2189C2.2642 15.0591 2.00941 14.8035 1.84962 14.4899C1.66797 14.1334 1.66797 13.6673 1.66797 12.7339Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className={styles.iconfieldtext} style={{ width: '90%' }}>
                  <input type="Password" className={styles['form-control']} placeholder="Confirm Password"  required/>
                </div>
              </div>

              <div style={{ background: 'rgba(218, 61, 38, 0.47) ', borderRadius: '20px' }}>
              
                <input type="submit" style={{ background: 'rgba(218, 61, 38, 0.47)', color: 'white' }} value="Continue" />
                
              </div>
            </Form> */}
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Row className="mb-4">
        <Form.Group as={Col} md="6" controlId="validationCustom01" >
          <Form.Control
            required
            type="text"
            placeholder="First name"
            className={styles.FormControl}
          />
          <Form.Control.Feedback type="invalid">
              Please Enter First Name.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            className={styles.FormControl}
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Last Name.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className='mb-4' >
      <Form.Group as={Col} md="12" controlId="validationCustomUsername" >
        
          <InputGroup hasValidation>
          
            <InputGroup.Text id="inputGroupPrepend" className={[styles.FormControl,styles.passwordicon]} 
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path d="M5.25 7.5L12.8845 13.2653L12.8871 13.2674C13.7348 13.8891 14.1589 14.2001 14.6234 14.3203C15.034 14.4265 15.4656 14.4265 15.8762 14.3203C16.3412 14.2 16.7665 13.8881 17.6157 13.2653C17.6157 13.2653 22.5126 9.50742 25.25 7.5M4 19.7502V10.2502C4 8.85011 4 8.14953 4.27248 7.61475C4.51217 7.14434 4.89434 6.76217 5.36475 6.52248C5.89953 6.25 6.60011 6.25 8.00024 6.25H22.5002C23.9004 6.25 24.5995 6.25 25.1342 6.52248C25.6047 6.76217 25.9881 7.14434 26.2278 7.61475C26.5 8.149 26.5 8.84874 26.5 10.2461V19.7545C26.5 21.1519 26.5 21.8506 26.2278 22.3849C25.9881 22.8553 25.6047 23.2381 25.1342 23.4778C24.6 23.75 23.9013 23.75 22.5039 23.75H7.99614C6.59874 23.75 5.899 23.75 5.36475 23.4778C4.89434 23.2381 4.51217 22.8553 4.27248 22.3849C4 21.8501 4 21.1504 4 19.7502Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email Address"
              aria-describedby="inputGroupPrepend"
              required
              className={[styles.FormControl,styles.passwordfield]}
          
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Email (example@gmail.com).
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className='mb-4'>
      <Form.Group as={Col} md="12" controlId="validationCustomUsername" >
        
          <InputGroup hasValidation>
            
                  <Form.Group as={Col} md="2" controlId="validationCustom03">
        <Form.Select aria-label="Default select example" className={[styles.FormControl,styles.FormSelect,styles.numbericon]}
        
          >
      <option style={{background:' black'}} >+91</option>
      <option value="1" style={{background:' black'}}>One</option>
      <option value="2" style={{background:' black'}}>Two</option>
      <option value="3" style={{background:' black'}}>Three</option>
    </Form.Select>
        </Form.Group>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              aria-describedby="inputGroupPrepend"
              required
              className={[styles.FormControl,styles.numberfield]}
             
            />
            <Form.Control.Feedback type="invalid">
              Please Enter a Phone Number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className='mb-4' >
      <Form.Group as={Col} md="12" controlId="validationCustomUsername" >
        
          <InputGroup hasValidation>
          
            <InputGroup.Text id="inputGroupPrepend" className={[styles.FormControl,styles.passwordicon]} 
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                    <path d="M15.0013 12.9004H15.8346M7.5013 12.9004H12.5013M5.0013 12.9004H4.16797M4.16797 10.4004H15.8346M4.16797 7.90039H15.8346M1.66797 12.7339V8.06722C1.66797 7.1338 1.66797 6.66674 1.84962 6.31022C2.00941 5.99662 2.2642 5.74184 2.5778 5.58205C2.93432 5.40039 3.40138 5.40039 4.3348 5.40039H15.6681C16.6016 5.40039 17.0676 5.40039 17.4241 5.58205C17.7377 5.74184 17.9934 5.99662 18.1532 6.31022C18.3346 6.66639 18.3346 7.13289 18.3346 8.06448V12.7363C18.3346 13.6679 18.3346 14.1337 18.1532 14.4899C17.9934 14.8035 17.7377 15.0591 17.4241 15.2189C17.068 15.4004 16.6021 15.4004 15.6705 15.4004H4.33206C3.40046 15.4004 2.93397 15.4004 2.5778 15.2189C2.2642 15.0591 2.00941 14.8035 1.84962 14.4899C1.66797 14.1334 1.66797 13.6673 1.66797 12.7339Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
              className={[styles.FormControl,styles.passwordfield]}
        
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Email (example@gmail.com).
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className='mb-4' >
      <Form.Group as={Col} md="12" controlId="validationCustomUsername" >
        
          <InputGroup hasValidation>
          
            <InputGroup.Text id="inputGroupPrepend" className={[styles.FormControl,styles.passwordicon]}>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                    <path d="M15.0013 12.9004H15.8346M7.5013 12.9004H12.5013M5.0013 12.9004H4.16797M4.16797 10.4004H15.8346M4.16797 7.90039H15.8346M1.66797 12.7339V8.06722C1.66797 7.1338 1.66797 6.66674 1.84962 6.31022C2.00941 5.99662 2.2642 5.74184 2.5778 5.58205C2.93432 5.40039 3.40138 5.40039 4.3348 5.40039H15.6681C16.6016 5.40039 17.0676 5.40039 17.4241 5.58205C17.7377 5.74184 17.9934 5.99662 18.1532 6.31022C18.3346 6.66639 18.3346 7.13289 18.3346 8.06448V12.7363C18.3346 13.6679 18.3346 14.1337 18.1532 14.4899C17.9934 14.8035 17.7377 15.0591 17.4241 15.2189C17.068 15.4004 16.6021 15.4004 15.6705 15.4004H4.33206C3.40046 15.4004 2.93397 15.4004 2.5778 15.2189C2.2642 15.0591 2.00941 14.8035 1.84962 14.4899C1.66797 14.1334 1.66797 13.6673 1.66797 12.7339Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              aria-describedby="inputGroupPrepend"
              required
              className={[styles.FormControl,styles.passwordfield]}
          
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Email (example@gmail.com).
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <div className={styles.submitbutton} >
      
      <Button type="submit" 
      className={styles.continue}
      style={{borderRadius: '20px',border:'white',marginTop:'20px',padding:'8px 30px'}} >
      Continue
      </Button>
     
      </div>
    </Form>
          </div>

          <div className={styles.formtext}>
            <span>Continue, if you agree the T&C and Privacy Policy</span>
          </div>
          <div>
            <span className={styles.formtext} style={{ color: '#666' }}>Already have an account?</span>&nbsp;<span className={styles.formtext} style={{ color: 'white' }}><Link href='/login/main'>Login Now</Link></span>
          </div>
        </div>
      </div>

    </>
  )

   }
export default Signup;