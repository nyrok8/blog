import { configureStore } from "@reduxjs/toolkit";
import { api } from './api/api'
import reactionsReducer from '../src/slices/reactionSlice';
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        reactions: reactionsReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;