import React from 'react';
import './BlogPost.css';

function BlogPost({ title, content, author }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <small>By {author}</small>
    </div>
  );
}

export default BlogPost;

