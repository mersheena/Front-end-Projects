import React, { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div className="like-button">
      <button onClick={handleLike}>
        <span role="img" aria-label="Like">👍</span>
        <span>{count}</span>
      </button>
    </div>
  );
};

export default LikeButton;
