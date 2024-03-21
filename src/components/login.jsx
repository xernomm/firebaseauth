import React from 'react'
import { auth, googleProvider } from '../firebase.js'
import Swal from 'sweetalert2';
import * as I from "react-bootstrap-icons"
import { Button, Card, Container, Row } from 'react-bootstrap';

export default function Login() {

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
          .then((result) => {
            sessionStorage.setItem("userEmail", result.user.email);
            
            Swal.fire({
                icon: "success",
                title: `Welcome ${result.user.displayName}`,
                showConfirmButton: false,
                timer: 1500
              });
            console.log('Signed in with Google:', result.user.displayName);
          })
          .catch((error) => {
            // Handle errors
            console.error('Google sign-in error:', error);
          });
      };


  return (
    <>
        <Container>
            <Row>
                <div className="p-5">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <Card className='rounded rounded-5 col-lg-10 py-5 card-login d-flex justify-content-center align-items-center bgBlur'>
                                <div className='col-12 text-center p-5'>
                                    <h1 className="display-6 text-white fw-bold">
                                        Login dulu bos
                                    </h1>
                                    <Button onClick={signInWithGoogle} variant='primary' className='col-12 p-2 mt-4'><span className="lead">Login with Google</span> <I.Google className='lead mb-2 ms-1' /></Button>
                                </div>
                        </Card>
                    </div>
                </div>
            </Row>
        </Container>
    </>
  )
}
