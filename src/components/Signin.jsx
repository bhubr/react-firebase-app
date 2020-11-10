import React, { useState } from 'react';
import firebase from 'firebase/app';
import useForm from '../hooks/useForm';

function Signin() {
  const [data, , handleChange] = useForm({
    email: '',
    password: '',
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        setUser(userData.user);
        setError(null);
      })
      .catch(setError);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign in</h3>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      {user && <div style={{ color: 'green' }}>Welcome, {user.email}!</div>}
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

export default Signin;
