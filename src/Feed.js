import React ,{useState}from 'react';
import InputOption from './InputOption';

import './Feed.css';
import Post from './Post';

function Feed() {
    const[posts, setPosts] = useState([]);

    const sendPost = e =>{
        e.preventDefault();

        
    };
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className='feed__input'>
          <span className="material-symbols-outlined">edit</span>
          <form>
            <input type="text" />
            <button onclick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__buttons">
          <InputOption Icon={() => <span className="material-symbols-outlined">image</span>} title="Photo" color="#70B5F9" />
          <InputOption Icon={() => <span className="material-symbols-outlined">subscriptions</span>} title="Video" color="#E7A33E" />
          <InputOption Icon={() => <span className="material-symbols-outlined">event_note</span>} title="Event" color="#C0CBCD" />
          <InputOption Icon={() => <span className="material-symbols-outlined">calendar_view_day</span>} title="Write article" color="#7FC15E" />
        </div>
      </div>
     {posts.map((post) => (
        <Post />
     ))}
      <Post 
        name="Vishnu Vardhan Maheswaran" 
        description="This is a test" 
        message="Wow this worked" 
      />
    </div>
  );
}

export default Feed;
