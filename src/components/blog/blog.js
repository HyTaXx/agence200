const blog = ({ posts }) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            {posts.map((post, index) => (
                <div key={index} className="rounded-xl bg-slate-200 p-2">
                    <div className="border-b-[#EB5E28] border-solid border-2">
                        <img
                            src={post.article.image}
                            alt={post.article.title.content}
                            className="w-full rounded-tl-lg rounded-tr-lg"
                        />
                    </div>
                    <h1 className="font-semibold">
                        {post.article.title.content}
                    </h1>
                    <span className="block bg-slate-700 h-px w-4/6 my-2 mx-auto"></span>
                    <p>{post.article.mainDescription.content}</p>
                </div>
            ))}
        </div>
    );
};

export default blog;
