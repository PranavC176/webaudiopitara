import React, { useState } from 'react';
import styles from '@/styles/email.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/components/Nav';

const EmailLogin = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isButtonDisabled = formValues.email === '' || formValues.password === '';

  return (
    <>
      <Head></Head>
      <Nav/>
      <div className={styles.loginmain}>
        <div className={styles.loginform}>
          <div className={styles.loginhead}>
            <div className={styles.formheading}>
              <span>Login to Audio Pitara</span>
            </div>

            <div className={styles.info}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                {/* Remaining SVG code */}
              </svg>
              <span>Your Information is safe with us</span>
            </div>
          </div>
          <div className={styles.info} style={{ textAlign: 'center' }}>
            <p>An email may be sent to authenticate your registered email address.</p>
          </div>

          <Form noValidate>
            <Row className="mb-4">
              <Form.Group as={Col} md="12" controlId="validationCustomUsername" className={styles.inputwrapper}>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-describedby="inputGroupPrepend"
                    required
                    className={[styles.FormControl, styles.emailfeild]}
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="12" controlId="validationCustomUsername" className={styles.inputwrapper}>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    className={[styles.FormControl, styles.passwordfeild]}
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <div className={styles.formtext}>
              <Link href="/forgotpassword/email">
                <span style={{ color: 'white' }}>Forgot Your Password?</span>
              </Link>
            </div>

            <div className={styles.submitbutton}>
            <Link href="/login/otp/email">
                
                  <Button type="submit" className={styles.continue} disabled={isButtonDisabled}>
                    Continue
                  </Button>
                
              </Link>
            </div>
          </Form>

          <div>
            <span className={styles.formtext} style={{ color: '#666' }}>New to Audio Pitara?</span>&nbsp;
            <span className={styles.formtext} style={{ color: 'white' }}>
              <Link href="/signup">Sign Up Now</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailLogin;
