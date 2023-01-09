import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState({
    commentsLoadingStatus: 'idle',
})

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch('/api2/comments')
            .then(data => data.json())
        
        return response
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        
        commentsArchived: commentsAdapter.updateOne
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, state => {state.commentsLoadingStatus = 'loading'})
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.commentsLoadingStatus = 'idle';
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchComments.rejected, state => {
                state.commentsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = commentsSlice;

export const {selectAll} = commentsAdapter.getSelectors(state => state.comments);

// export const filteredCommentsSelector = createSelector(
//     (state) => state.comments.activeFilter,
//     selectAll,
//     (state) => state.user.id,
//     (filter, comments, userId) => {
//         switch(filter) {
//             case 1:
//                 return comments.filter(item => (item.author_id === userId) && (item => !item.archived))
//             case 2:
//                 return comments.filter(item => item.archived)
//             default:
//                 return comments.filter(item => !item.archived)
//         }
//     }
// )

export default reducer;
export const {
    commentsArchived
} = actions;