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
                <div className="">
                    <div className="">
                                <div className='col-12 text-center '>
                                    <h1 className="display-6 ">
                                        Kelazz, dh skrg lo cabut
                                    </h1>
                                    <hr />
                                    <Button onClick={handleLogout} variant='danger' className='col-12 p-2 mt-4'><span className="lead">Iyak cabut gw cabut</span></Button>
                                </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}
