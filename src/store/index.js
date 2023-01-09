import { configureStore } from "@reduxjs/toolkit";
import friends from '../containers/UserPage/components/friends/friendsSlice'
import posts from '../containers/Feed/postsSlice'
import comments from '../containers/Feed/commentsSlice'
import user from '@/containers/UserPage/userSlice'


const store = configureStore({
    reducer: { friends, posts, comments, user },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devtools: process.env.NODE_ENV != 'production',
})

export default store;