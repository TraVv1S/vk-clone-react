import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: {
        list: [],
        loading: 'idle'
    },

    onlineFriends: {
        list: [],
        loading: 'idle'
    }
    
};


const friendsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        friendsFetching: state => {state.friends.loading = 'loading'},
        friendsFetched: (state, action) => {
            state.friends.loading = 'idle';
            state.friends.list = action.payload;
        },
        friendsFetchingError: state => {
            state.friends.list = 'error';
        },
        onlineFriendsFetching: state => {state.onlineFriends.loading = 'loading'},
        onlineFriendsFetched: (state, action) => {
            state.onlineFriends.loading = 'idle';
            state.onlineFriends.list = action.payload;
        },
        onlineFriendsFetchingError: state => {
            state.onlineFriends.list = 'error';
        }
    }
});

const {actions, reducer} = friendsSlice;

export default reducer;

export const {
    friendsFetching,
    friendsFetched,
    friendsFetchingError,
    onlineFriendsFetching,
    onlineFriendsFetched,
    onlineFriendsFetchingError,
} = actions;