import {friendsFetching, friendsFetched, friendsFetchingError, onlineFriendsFetching, onlineFriendsFetched, onlineFriendsFetchingError} from '../containers/UserPage/components/friends/friendsSlice';


export const fetchFriends = (request) => (dispatch) => {
    dispatch(friendsFetching());
    request("/api2/users")
        .then(data => dispatch(friendsFetched(data)))
        .catch(() => dispatch(friendsFetchingError()))
}

export const fetchOnlineFriends = (request) => (dispatch) => {
    dispatch(onlineFriendsFetching());
    request("/api2/users?another=true")
        .then(data => dispatch(onlineFriendsFetched(data)))
        .catch(() => dispatch(onlineFriendsFetchingError()))
}