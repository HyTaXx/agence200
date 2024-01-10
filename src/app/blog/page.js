'use client';
import React, { useEffect, useState } from 'react';
import { builder } from '@builder.io/sdk';
import Blog from '../../components/blog/blog.js';
import { Header } from '../../components/header/header.js';
import { Footer } from '../../components/footer/footer.js';

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

    return (
        <section className="bg-[#FFFCF2]">
            <Header />
            <section className="p-16">
                <h2 className="font-bold text-xl mb-10">Nos Articles:</h2>
                <Blog posts={posts}></Blog>
            </section>
            <Footer />
        </section>
    );
};

export default BlogPage;
