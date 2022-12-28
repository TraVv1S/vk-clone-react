import { useHttp } from '../../hooks/http.hook'
import { useEffect } from 'react'
import Post from '../Post/post'
import Tabs from '../Tabs/tabs'
import Island from '@/uikit/island/island'
// import useDataService from '../../services/dataService'

import classes from './feed.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions'
import {createSelector} from '@reduxjs/toolkit'


const Feed = () => {
    // const {isLoaded, error, getPosts} = useDataService();
    
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [posts, setPosts] = useState([]);
    // const [activeTab, setActiveTab] = useState(0);

    const filteredPostsSelector = createSelector(
        (state) => state.posts.posts,
        (state) => state.posts.postsFilter,
        (posts, postsFilter) => {
            if (postsFilter === 'my') {
                return posts;
            } else if (postsFilter === 'archived') {
                return posts.filter(item => item.archived)
            } else {
                return posts;
            }
        }
    )

    const filteredPosts = useSelector(filteredPostsSelector);
    // const posts = useSelector(state => state.posts.posts)
    const postsLoadingStatus = useSelector(state => state.posts.postsLoadingStatus);
    // const postsFilter = useSelector(state => state.posts.postsFilter);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const userId = 424242;

    // const getPosts = () => { 
    //     fetch("/api2/posts")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setPosts(result); 
    //         //   setFilteredPosts(result)
    //         },
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    // }

    useEffect(() => {
        // getPosts()
        dispatch(fetchPosts(request));
    }, [])

    // const filteredPosts =  useMemo(() => {
    //     switch(activeTab) {
    //         case '1': 
    //             return posts.filter(post => post.author_id === userId)
    //         case '2':
    //             return posts.filter(post => post.archived)
    //         default:
    //             return posts
    //     }
    // }, [activeTab, posts]);
    
    const handlePostDelete = (postId) => {
        // setPosts(posts.filter(post => post.id != postId))
    }

    const handleTabChange = (id) => {
        // setActiveTab(id)
    }

    return (
        <div className={classes.feed}>
            <Tabs onTabChange={handleTabChange}/>
            
            {/* {error ? error.message : null}
            {!isLoaded ? <Island>Loading...</Island> : null} */}
            
            {filteredPosts.length === 0
                ? <Island>Nothing to show</Island> 
                : filteredPosts.map((p) => <Post key={p.id} onPostDelete={handlePostDelete} postData={p}/>)}
        </div>
    )
}

export default Feed;