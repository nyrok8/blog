import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../api/api";
import { Link } from "react-router-dom";
import Reactions from "./Reactions";
import Post from "./Post";

interface SearchState {
    search: {
        value: string;
    };
}

interface Post {
    id: number;
    title: string;
    body: string;
}

function PostList() {
    const filter = useSelector((state: SearchState) => state.search.value)
    const { data: posts, isLoading, isError } = useGetPostsQuery(filter);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    if (posts.length === 0) {
        return (
            <>
                <span className="material-symbols-outlined">
                    sentiment_dissatisfied
                </span>
                <h3>No posts found</h3>
            </>
        )
    }

    return (
        <div className="post-container">
            {posts.map((post: Post, index: number) => (
                <div key={post.id} className="post" id={!index ? 'first-post' : ''}>
                    <Post post={post} index={index} />
                    <div className="post-tools">
                        <Reactions id={post.id} />
                        <Link to={`/post/${post.id}`}>
                            <button>Read more</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;