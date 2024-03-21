import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { auth } from '../firebase';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

export default function Header() {

    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
      const email = sessionStorage.getItem('userEmail');
      setUserEmail(email);
  
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserEmail(user.email);
        } else {
          setUserEmail(null);
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);

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
      <header className="fixed-top">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">KiteKiteAje</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
        </Navbar.Collapse>
        {userEmail && (
                <Navbar.Collapse className="justify-content-end">
                <div className="d-lg-flex justify-content-center align-items-center">
                <Navbar.Text>
                  Signed in as: <a href="#login">{userEmail}</a>
                </Navbar.Text>
                <Button onClick={handleLogout} variant='danger' className='ms-4'>
                    Sign Out
                </Button>
                </div>
              </Navbar.Collapse>
            )}
      </Container>
    </Navbar>
      </header>
    </div>
  )
}
