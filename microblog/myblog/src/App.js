import React, { useState } from 'react';
import PostForm from './PostForm';
import LikeButton from './LikeButton';
import RadioButtonGroup from './RadioButtonGroup';
import ImageUpload from './ImageUpload';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };


  const handleEdit = (id, newContent) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, content: newContent } : post
    );
    setPosts(updatedPosts);
  };

  const handleDelete = id => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }; 

  






  return (
    <div className="App">
      <h1>Microblog</h1>
      <ul>
     
      <PostForm onSubmit={addPost} />
      
        {posts.map(post => (
          <li key={post.id}>
            <div className='box'>
            <ImageUpload />
            <div>
              <div className='title'>
              <h5>{post.title} : </h5>
              </div>
              <div className='content'>
              <p>{post.content}</p>
              </div>
            <button onClick={() => handleEdit(post.id, prompt('Edit post:', post.content))}>Edit</button>
            <br></br>
            <br></br>
            
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            
            <br></br>
            <br></br>
            <LikeButton />
            <br></br>
            <br></br>
            <br></br>
            <RadioButtonGroup />
            </div>
           
            
            
            
        
           
         

           
            
        
     






            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;


