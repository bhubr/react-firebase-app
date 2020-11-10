import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import AuthComponents from './components/AuthComponents';
import NewPost from './components/NewPost';
import PostsList from './components/PostsList';
import './App.css';

function App() {
  const [ready, setReady] = useState(false);
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
      setReady(true);
    });
  }, []);

  const handleSignout = () => firebase.auth().signOut();

  if (!ready) return <div>loading...</div>;

  if (!user) {
    return <AuthComponents />;
  }

  return (
    <div className="App">
      <button type="button" onClick={handleSignout}>
        Sign out {user.email}
      </button>
      <NewPost />
      <PostsList />
    </div>
  );
}

export default App;
