import React from 'react';
// import firebase from 'firebase/app';
import Signup from './components/Signup';
import './App.css';

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // Get a reference to the database service
  //   const database = firebase.database();
  //   // We loaded api.randomuser.me's response data into the firebase db
  //   // see randomuser.json at the repo root
  //   return database
  //     .ref('/')
  //     .once('value')
  //     .then((snapshot) => {
  //       const val = snapshot.val();
  //       const { results } = val;
  //       const [randomUser] = results;
  //       setUser(randomUser);
  //     });
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React starter template</h1>
      </header>
      {/* {user && <img src={user.picture.large} alt={user.name.last} />} */}
      <Signup />
    </div>
  );
}

export default App;
