import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReactionsState {
    [postId: number]: {
        likeCount: number;
        dislikeCount: number;
        selectedReaction: string | null;
    };
}

const reactionsSlice = createSlice({
    name: 'reactions',
    initialState: {} as ReactionsState,
    reducers: {
        toggleLike: (state, { payload: id }: PayloadAction<number>) => {
            switch (state[id]?.selectedReaction) {
                case 'like':
                    state[id].selectedReaction = null;
                    state[id].likeCount -= 1;
                    break;
                case 'dislike':
                    state[id].selectedReaction = 'like';
                    state[id].dislikeCount -= 1;
                    state[id].likeCount += 1;
                    break;
                default:
                    state[id].selectedReaction = 'like';
                    state[id].likeCount += 1;
                    break;
            }
        },
        toggleDislike: (state, { payload: id }: PayloadAction<number>) => {
            switch (state[id]?.selectedReaction) {
                case 'like':
                    state[id].selectedReaction = 'dislike';
                    state[id].dislikeCount += 1;
                    state[id].likeCount -= 1;
                    break;
                case 'dislike':
                    state[id].selectedReaction = null;
                    state[id].dislikeCount -= 1;
                    break;
                default:
                    state[id].selectedReaction = 'dislike';
                    state[id].dislikeCount += 1;
                    break;
            }
        },
        toggleInitialize: (state, { payload: id }: PayloadAction<number>) => {
            state[id] = {
                likeCount: randomNumber(),
                dislikeCount: randomNumber(),
                selectedReaction: null
            };
        },
    },
});

export const { toggleLike, toggleDislike, toggleInitialize } = reactionsSlice.actions;

export default reactionsSlice.reducer;

const randomNumber = () => {
    return Math.floor(Math.random() * 50);
};
