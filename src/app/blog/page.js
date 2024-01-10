'use client';
import React, { useEffect, useState } from 'react';
import { builder } from '@builder.io/sdk';
import Blog from '../../components/blog/blog.js';

builder.init('b91185a4ea4f4cc0a2c7659223a79fcb');

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    // get posts from Builder.io
    useEffect(() => {
        builder
            .get('articlev-2')
            .promise()
            .then(({ data }) => {
                console.log(data);
                setPosts(data.article);
            });
    }, []);

    return <Blog posts={posts}></Blog>;
};

export default BlogPage;
