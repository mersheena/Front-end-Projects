import React from 'react';

const Post = ({ post, handleEdit }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => handleEdit(post.id, prompt('Edit post:', post.content))}>Edit</button>


      
    </div>
  );
};

export default Post;
