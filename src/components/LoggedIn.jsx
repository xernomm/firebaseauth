import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { auth } from '../firebase';
import * as I from 'react-bootstrap-icons'
import Swal from 'sweetalert2';

export default function LoggedIn() {


    const handleLogout = () => {
        auth
          .signOut()
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: `Logged out!`,
              showConfirmButton: false,
              timer: 1500,
            });
            sessionStorage.clear();
            console.log('Logout successful');
          })
          .catch((error) => {
            // An error occurred
            console.error('Logout error:', error);
          });
      };

  return (
    <div>
      <Container>
            <Row>
                <div className="p-5">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <Card className='rounded rounded-5 col-lg-10 py-5 card-login d-flex justify-content-center align-items-center bgBlur'>
                                <div className='col-12 text-center p-5'>
                                    <h1 className="display-6 text-white fw-bold">
                                        Kelazz, dh skrg lo cabut
                                    </h1>
                                    <Button onClick={handleLogout} variant='danger' className='col-12 p-2 mt-4'><span className="lead">Iyak cabut gw cabut</span></Button>
                                </div>
                        </Card>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}
