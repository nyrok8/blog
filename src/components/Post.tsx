
interface PostProps {
    post: {
        id: number;
        title: string;
        body: string;
    },
    index: number
}

function Post({ post, index }: PostProps) {
    return (
        <>
            <img src="https://placehold.co/1920x1080" alt="post-image" />
            <div className="post-content">
                <h3>{post.title}</h3>
                {index === 0 && <p>{post.body}</p>}
            </div>
        </>
    )
}

export default Post;