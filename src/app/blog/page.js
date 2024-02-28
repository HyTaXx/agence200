'use client';
import React, { useEffect, useState } from 'react';
import { builder } from '@builder.io/sdk';
import Blog from '../../components/blog/blog.js';
import SingleArticle from '../../components/blog/singleArticle.js';
import { Header } from '../../components/header/header.js';
import { Footer } from '../../components/footer/footer.js';

builder.init('b91185a4ea4f4cc0a2c7659223a79fcb');

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // get posts from Builder.io
    useEffect(() => {
        builder
            .get('articlev-2')
            .promise()
            .then(({ data }) => {
                setPosts(data.article);
            });
    }, []);

    const setSelectedArticleIndex = (index) => {
        setSelectedArticle(index);
    };

    return (
        <section className="bg-[#FFFCF2]">
            <Header />
            {selectedArticle ? (
                <section className="p-16 relative text-black">
                    <SingleArticle
                        post={posts[selectedArticle]}
                    ></SingleArticle>
                    <div
                        className="absolute top-10 right-10 w-10 h-10 hover:cursor-pointer"
                        onClick={(event) => {
                            event.preventDefault();
                            setSelectedArticle(null);
                        }}
                    >
                        <img
                            src="/images/close_icon.png"
                            alt="Close"
                            className="w-full h-full"
                        />
                    </div>
                </section>
            ) : (
                <section className="p-16">
                    <h2 className="font-bold text-xl mb-10">Nos Articles:</h2>
                    <Blog
                        posts={posts}
                        setSelectedArticleIndex={setSelectedArticleIndex}
                    ></Blog>
                </section>
            )}
            <Footer />
        </section>
    );
};

export default BlogPage;
