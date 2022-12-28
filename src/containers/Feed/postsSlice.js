import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    postsLoadingStatus: 'idle',
    postsFilter: 'all'
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching: state => {state.postsLoadingStatus = 'loading'},
        postsFetched: (state, action) => {
            state.postsLoadingStatus = 'idle'
            state.posts = action.payload;
        },
        postsFetchingError: state => {state.postsLoadingStatus = 'error'}
    }
});

const {actions, reducer} = postsSlice;

export default reducer;

export const {
    postsFetching,
    postsFetched,
    postsFetchingError
} = actions;

