import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import Header from '../components/Navbar'
import Login from '../components/login'
import LoggedIn from '../components/LoggedIn';
import img from '../img/info.jpg'
import { Row } from 'react-bootstrap';

export default function LoginPage() {
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

  return (
    <div className=''>
      <Header />
      <div className="d-lg-flex">
        <div className="col-lg-7 d-flex justify-content-center align-items-center col-sm-12 bodyBg2">
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center bg-white col-sm-12 vh-100 p-5 mt-5">
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={img} alt="" className="col-8" />
                </div>
            
                {userEmail && (
                    <LoggedIn />
                )}
                {!userEmail && (
                    <Login />
                )}
            </div>
        </div>
      </div>

    </div>
  )
}
