import React from 'react';

const blog = ({ posts, setSelectedArticleIndex }) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="rounded-xl p-4  shadow-2xl bg-[#FFFCF2] relative"
                >
                    <div className="border-b-[#EB5E28] border-b-solid border-b-2 ">
                        <img
                            src={post.article.image}
                            alt={post.article.title.content}
                            className="w-full rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="bg-[#EB5E28] p-2 rounded-xl absolute top-1 right-1">
                            Categorie...
                        </div>
                    </div>
                    <h1 className="font-semibold">
                        {post.article.title.content}
                    </h1>
                    <span className="block bg-slate-700 h-0.5 w-4/6 my-2 mx-auto"></span>
                    <p>{post.article.mainDescription.content}</p>
                    <div className="flex justify-between items-center">
                        <span className="block bg-slate-700 h-0.5 w-1/12 my-2" />
                        <span className="block bg-slate-700 h-0.5 w-1/12 my-2" />
                    </div>
                    <a
                        href="#"
                        className="block w-full text-center hover:underline"
                        onClick={(event) => {
                            event.preventDefault();
                            setSelectedArticleIndex(index);
                        }}
                    >
                        En voir plus...
                    </a>
                </div>
            ))}
        </div>
    );
};

export default blog;
