import { configureStore } from "@reduxjs/toolkit";
import friends from '../containers/UserPage/components/friends/friendsSlice'
import posts from '../containers/Feed/postsSlice'

const store = configureStore({
    reducer: { friends, posts },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devtools: process.env.NODE_ENV != 'production',
})

export default store;