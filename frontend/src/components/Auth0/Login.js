import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate(); // importing useNavigate from react-router-dom

  const onLoginClick = () => {
    loginWithRedirect({
      appState: { returnTo: window.location.origin },
    }).then(() => {
      navigate('/homepage'); // redirecting to the homepage after successful authentication
    });
  };

  return <button className='login' onClick={onLoginClick}>Log In</button>;
};

export default LoginButton;