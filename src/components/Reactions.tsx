import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, toggleDislike, toggleInitialize } from '../slices/reactionSlice';

interface ReactionsProps {
    id: number;
}

interface ReactionsState {
    reactions: {
        [postId: number]: {
            likeCount: number;
            dislikeCount: number;
            selectedReaction: 'like' | 'dislike' | null;
        },
    };
}

function Reactions({ id }: ReactionsProps) {
    const dispatch = useDispatch();
    const data = useSelector((state: ReactionsState) => state.reactions[id]);

    useEffect(() => {
        if (!data) {
            dispatch(toggleInitialize(id));
        }
    }, [dispatch, id, data]);

    const likes = useSelector((state: ReactionsState) => state.reactions[id]?.likeCount);
    const dislikes = useSelector((state: ReactionsState) => state.reactions[id]?.dislikeCount);
    const reaction = useSelector((state: ReactionsState) => state.reactions[id]?.selectedReaction);

    const handleLikeClick = () => {
        dispatch(toggleLike(id));
    };

    const handleDislikeClick = () => {
        dispatch(toggleDislike(id));
    };

    return (
        <>
            <div className="reaction-container">
                <div className="reaction" id="likes" onClick={handleLikeClick}>
                    <span
                        className="material-symbols-outlined"
                        style={{ color: reaction === 'like' ? '#219653' : '#4F4F4F' }}
                    >
                        thumb_up
                    </span>
                    <p>{likes}</p>
                </div>
                
                <div className="reaction" onClick={handleDislikeClick}>
                    <span
                        className="material-symbols-outlined"
                        style={{ color: reaction === 'dislike' ? '#EB5757' : '#4F4F4F' }}
                    >
                        thumb_down
                    </span>
                    <p>{dislikes}</p>
                </div>
            </div>
        </>
    );
}

export default Reactions;