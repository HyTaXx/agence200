'use client';
import React, { useEffect, useState } from 'react';
import { builder } from '@builder.io/sdk'

builder.init('b91185a4ea4f4cc0a2c7659223a79fcb');

const BlogPage = () => {
 const [posts, setPosts] = useState([]);

 // get posts from Builder.io
 useEffect(() => {
   builder.get('articlev-2').promise()
     .then(({ data }) => {
      console.log(data.article)
      setPosts(data.article);
     });
 }, []);

 // @TODO - give style to this page.
 return (
  <div>
  {posts.map((post, index) => (
    <div key={index}>
      <h1 style = {{ color: post.article.title.color }}>{post.article.title.content}</h1>
      <img src={post.article.image} alt={post.article.title.content} />
      <p style = {{ color: post.article.mainDescription.color }}>{post.article.mainDescription.content}</p>
      {post.article.subtitles.subtitleList.map((subtitle, i) => (
        <div key={i}>
          <p style={{ color: subtitle.description.color }}>{subtitle.description.content}</p>
          <p style={{ color: subtitle.subtitle.color }}>{subtitle.subtitle.content}</p>
        </div>
      ))}
    </div>
  ))}
  </div>
 );
};

export default BlogPage;