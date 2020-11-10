import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './AuthComponents.css';

function AuthComponents() {
  return (
    <div className="AuthComponents">
      <Signup />
      <Signin />
    </div>
  );
}

export default AuthComponents;
