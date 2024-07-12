import React,{forwardRef} from 'react';
import './Post.css';
import InputOption from './InputOption';
import { Avatar } from '@mui/material';

const Post =forwardRef(({ name, description, message, photoUrl },ref)=> {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl} alt={name[0]} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={() => <span className="material-symbols-outlined">thumb_up</span>} title="Like" color="#70B5F9" />
        <InputOption Icon={() => <span className="material-symbols-outlined">chat</span>} title="Comment" color="#E7A33E" />
        <InputOption Icon={() => <span className="material-symbols-outlined">share</span>} title="Share" color="#C0CBCD" />
        <InputOption Icon={() => <span className="material-symbols-outlined">send</span>} title="Send" color="#7FC15E" />
      </div>
    </div>
  );
})

export default Post;