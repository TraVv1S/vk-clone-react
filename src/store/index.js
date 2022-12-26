import { configureStore } from "@reduxjs/toolkit";
import friends from '../containers/UserPage/components/friends/friendsSlice'

const store = configureStore({
    reducer: { friends },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devtools: process.env.NODE_ENV != 'production',
})

export default store;