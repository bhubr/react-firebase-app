import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Get a reference to the database service
    // const database = firebase.database();
    // We loaded api.randomuser.me's response data into the firebase db
    // see randomuser.json at the repo root
    // return database
    //   .ref('/')
    //   .once('value')
    //   .then((snapshot) => {
    //     const val = snapshot.val();
    //     const { results } = val;
    //     const [randomUser] = results;
    //     setUser(randomUser);
    //   });

    firebase.auth().onAuthStateChanged((fbUser) => {
      if (fbUser) {
        const { uid, displayName, email, photoURL } = fbUser;
        setUser({ uid, displayName, email, photoURL });
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleSignout = () => firebase.auth().signOut();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React starter template</h1>
      </header>
      {user && (
        <p>
          {user.uid} {user.email}
        </p>
      )}
      <button type="button" onClick={handleSignout}>
        Sign out
      </button>
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
