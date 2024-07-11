import React, { useEffect, useState } from 'react';
import InputOption from './InputOption';
import './Feed.css';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = e => {
    e.preventDefault();

    if (!user) {
      alert('User not logged in');
      return;
    }

    const name = user.displayName || 'Vishnu Vardhan Maheswaran';
    const description = user.email || '';
    const photoUrl = user.photoUrl || '';

    if (!name || !description || !input) {
      alert('All fields are required');
      return;
    }

    db.collection('posts').add({
      name,
      description,
      message: input,
      photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className='feed__input'>
          <span className="material-symbols-outlined">edit</span>
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__buttons">
          <InputOption Icon={() => <span className="material-symbols-outlined" style={{ color: "#70B5F9" }}>image</span>} title="Photo" />
          <InputOption Icon={() => <span className="material-symbols-outlined" style={{ color: "#E7A33E" }}>subscriptions</span>} title="Video" />
          <InputOption Icon={() => <span className="material-symbols-outlined" style={{ color: "#C0CBCD" }}>event_note</span>} title="Event" />
          <InputOption Icon={() => <span className="material-symbols-outlined" style={{ color: "#7FC15E" }}>calendar_view_day</span>} title="Write article" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post 
            key={id} 
            name={name} 
            description={description} 
            message={message} 
            photoUrl={photoUrl} 
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
