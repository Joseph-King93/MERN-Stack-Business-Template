// AuthPage.jsx

import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Button from 'react-bootstrap/Button';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1 style={{ width: "60%", margin: "0 auto" }}>HALT! Authenticate Yourself!</h1>
      <Button className="float-end mx-5" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}
