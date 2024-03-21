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
                <div className="">
                    <div className="d-flex justify-content-center align-items-center">
                                <div className='col-12 text-center p-5'>
                                    <h1 className="display-6  ">
                                        Login dulu bos
                                    </h1>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit reprehenderit aspernatur voluptas assumenda esse doloribus autem, perspiciatis unde dicta!
                                    </p>
                                    <hr />
                                    <Button onClick={signInWithGoogle} variant='primary' className='col-12 p-2 mt-4'><span className="lead">Login with Google</span> <I.Google className='lead mb-2 ms-1' /></Button>
                                </div>
                    </div>
                </div>
            </Row>
        </Container>
    </>
  )
}
