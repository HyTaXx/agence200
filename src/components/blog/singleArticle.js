import React from 'react';

const singleArticle = ({ post }) => {
    return (
        <div>
            <h2 className="text-center font-bold text-xl p-4">
                {post.article.title.content}
            </h2>
            <img
                src={post.article.image}
                alt={post.article.title.content}
                className="w-full h-2/4"
            />
            <p className="mb-10">{post.article.mainDescription.content}</p>
            {post.article.subtitles.subtitleList.map(
                (subtitleElement, index) => (
                    <div key={index} className="p-4">
                        <h3 className="font-bold">
                            {subtitleElement.subtitle.content}
                        </h3>
                        <p>{subtitleElement.description.content}</p>
                    </div>
                )
            )}
            <div className="mt-10">
                <p className="text-right">Author : Mr. Jack</p>
            </div>
        </div>
    );
};

export default singleArticle;
