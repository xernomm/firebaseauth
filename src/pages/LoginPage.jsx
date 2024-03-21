import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import Header from '../components/Navbar'
import Login from '../components/login'
import LoggedIn from '../components/LoggedIn';

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
    <div className='bodyBg'>
      <Header />
      {userEmail && (
        <LoggedIn />
      )}
      {!userEmail && (
        <Login />
      )}
    </div>
  )
}
