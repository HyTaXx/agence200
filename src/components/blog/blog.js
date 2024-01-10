const blog = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h1 style={{ color: post.article.title.color }}>
                        {post.article.title.content}
                    </h1>
                    <img
                        src={post.article.image}
                        alt={post.article.title.content}
                    />
                    <p style={{ color: post.article.mainDescription.color }}>
                        {post.article.mainDescription.content}
                    </p>
                    {post.article.subtitles.subtitleList.map((subtitle, i) => (
                        <div key={i}>
                            <p style={{ color: subtitle.description.color }}>
                                {subtitle.description.content}
                            </p>
                            <p style={{ color: subtitle.subtitle.color }}>
                                {subtitle.subtitle.content}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default blog;
