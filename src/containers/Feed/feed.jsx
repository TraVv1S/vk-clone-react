import { useEffect } from 'react'
import Post from '../Post/post'
import Tabs from '../Tabs/tabs'
import Island from '@/uikit/island/island'

import classes from './feed.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, filteredPostsSelector } from './postsSlice'
import { fetchComments } from './commentsSlice'



const Feed = () => {
    
    const dispatch = useDispatch();
    const filteredPosts = useSelector(filteredPostsSelector);
    

    useEffect(() => {
        dispatch(fetchComments());
        dispatch(fetchPosts());
    }, [])
    
    // const handlePostDelete = (postId) => {
    //     filteredPosts = filteredPosts.filter(post => post.id != postId)
    // }

    return (
        <div className={classes.feed}>
            <Tabs/>
            
            {/* {error ? error.message : null}
            {!isLoaded ? <Island>Loading...</Island> : null} */}
            
            {filteredPosts.length === 0
                ? <Island>Nothing to show</Island> 
                : filteredPosts.map((p) => <Post key={p.id} postData={p}/>)}
        </div>
    )
}

export default Feed;