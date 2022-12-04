import { useState, useEffect } from 'react'
import Post from '../Post/post'
import Tabs from '../Tabs/tabs'
import Island from '@/uikit/island/island'

import classes from './feed.module.scss'


const Feed = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const userId = 424242;

    const getPosts = () => {
        fetch("/api2/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setPosts(result);
              console.log(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }

    useEffect(() => {
        getPosts()
        
    }, [])
    // const posts = [...user.posts]
    
    

    const handlePostDelete = (postId) => {
        setFilteredPosts(filteredPosts.filter(post => post.id != postId))
    }

    const handleTabChange = (id) => {
        switch(id) {
            case '1': 
                setFilteredPosts(posts.filter(post => post.author_id === userId))
                break
            case '2':
                setFilteredPosts(posts.filter(post => post.archived))
                break
            default:
                setFilteredPosts(posts)
        }
    }

    return (
        <div className={classes.feed}>
            <Tabs onTabChange={handleTabChange}/>
            {error ? error.message : null}
            {!isLoaded 
            ? <Island>Loading...</Island>
            : filteredPosts.map((p) => <Post key={p.id} onPostDelete={handlePostDelete} postData={p}/>)}
            
        </div>
    )
}

export default Feed;