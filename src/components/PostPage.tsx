import { useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from '../api/api';
import Reactions from "./Reactions";
import Post from "./Post";

function PostPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(id));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <>
            <div className="post-container">
                <div className="post-page-tools">
                    <div className="post-back" onClick={() => navigate('/')}>
                        <span className="material-symbols-outlined">
                            keyboard_backspace
                        </span>
                        <p>Go Back</p>
                    </div>
                    <Reactions id={Number(id)} />
                </div>
                <div className="post" id='first-post'>
                    <Post post={post} index={0} />
                </div>
            </div>
        </>
    );
}

export default PostPage;