'use client'
import React, { useEffect, useState } from 'react';

const BlogPage = () => {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  const fetchPosts = async () => {
    const res = await fetch('https://cdn.builder.io/api/v1/public/spaces/{SPACE_ID}/content/posts?fields=*.*&limit=10&apiKey={YOUR_API_KEY}&query={"published":true}');
    const posts = await res.json();
    setPosts(posts);
  };

  fetchPosts();
 }, []);

 return (
  <div>
    {/* A update */}
  </div>
 );
};

export default BlogPage;
