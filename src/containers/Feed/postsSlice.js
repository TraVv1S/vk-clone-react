import { createSlice, createSelector, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
    postsLoadingStatus: 'idle',
    activeFilter: 0
})

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('/api2/posts')
            .then(data => data.json())
        
        return response
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFilterChanged: (state, action) => {
                    state.activeFilter = action.payload;
                },
        postsArchived: postsAdapter.updateOne
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, state => {state.postsLoadingStatus = 'loading'})
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postsLoadingStatus = 'idle';
                postsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchPosts.rejected, state => {
                state.postsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = postsSlice;

export const {selectAll} = postsAdapter.getSelectors(state => state.posts);

export const filteredPostsSelector = createSelector(
    (state) => state.posts.activeFilter,
    selectAll,
    (state) => state.user.id,
    (filter, posts, userId) => {
        switch(filter) {
            case 1:
                return posts.filter(item => (item.author_id === userId) && (item => !item.archived))
            case 2:
                return posts.filter(item => item.archived)
            default:
                return posts.filter(item => !item.archived)
        }
    }
)

export default reducer;
export const {
    postsFilterChanged,
    postsArchived
} = actions;