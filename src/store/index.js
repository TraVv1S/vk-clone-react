import { configureStore } from "@reduxjs/toolkit";
import users from '../containers/UserPage/components/friends/friendsSlice'

const store = configureStore({
    reducer: { users },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devtools: process.env.NODE_ENV != 'production',
})

export default store;