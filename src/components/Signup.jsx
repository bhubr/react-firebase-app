import React, { useState } from 'react';
import firebase from 'firebase/app';
import useForm from '../hooks/useForm';

function Signup() {
  const [data, , handleChange] = useForm({
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setSuccess(true);
        setError(null);
      })
      .catch(setError);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      {success && <div style={{ color: 'green' }}>Sign-up successful!</div>}
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
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
