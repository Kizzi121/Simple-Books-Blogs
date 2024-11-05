import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import './BlogPost.css';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="blog-list">
      <h1>Books Blog Posts</h1>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
}

export default BlogList;
