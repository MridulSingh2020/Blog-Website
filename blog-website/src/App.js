import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (title.trim() && content.trim()) {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  const handleDeletePost = index => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <h1>Blog Website</h1>
      <div className="new-post">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Post title"
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Post content"
        ></textarea>
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;