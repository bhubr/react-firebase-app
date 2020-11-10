import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

function PostsList() {
  const [ready, setReady] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const { uid } = firebase.auth().currentUser;
    const userPostsRef = firebase.database().ref(`posts/${uid}`);
    userPostsRef.on('value', (snapshot) => {
      setPosts(snapshot.val());
      setReady(true);
    });
  }, []);

  if (!ready) return <div>loading...</div>;
  return (
    <div className="PostsLists">
      <h3>Posts</h3>
      {Object.keys(posts).map((postId) => (
        <p key={postId}>{posts[postId].content}</p>
      ))}
    </div>
  );
}

export default PostsList;
