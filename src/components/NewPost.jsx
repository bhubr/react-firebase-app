import React, { useState } from 'react';
import firebase from 'firebase/app';
import useForm from '../hooks/useForm';

function writeNewPost(content) {
  const user = firebase.auth().currentUser;
  const { uid } = user;
  const postData = {
    uid,
    content,
  };

  // Get a key for a new Post.
  const newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates[`/posts/${uid}/${newPostKey}`] = postData;

  return firebase.database().ref().update(updates);
}

function NewPost() {
  const [data, , handleChange] = useForm({
    content: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { content } = data;
    return writeNewPost(content)
      .then(() => setSuccess(true))
      .catch(setError);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>NewPost</h3>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      {success && <div style={{ color: 'green' }}>Post successful!</div>}
      <label htmlFor="content">
        Content
        <input
          id="content"
          name="content"
          type="content"
          value={data.content}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Post</button>
    </form>
  );
}

export default NewPost;
