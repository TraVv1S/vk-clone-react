import { useState, useEffect, useMemo } from 'react'
import Post from '../Post/post'
import Tabs from '../Tabs/tabs'
import Island from '@/uikit/island/island'

import classes from './feed.module.scss'


const Feed = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const userId = 424242;

    const getPosts = () => {
        fetch("/api2/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setPosts(result);
            //   setFilteredPosts(result)
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

    const filteredPosts =  useMemo(() => {
        switch(activeTab) {
            case '1': 
                return posts.filter(post => post.author_id === userId)
            case '2':
                return posts.filter(post => post.archived)
            default:
                return posts
        }
    }, [activeTab, posts]);
    
    const handlePostDelete = (postId) => {
        setPosts(posts.filter(post => post.id != postId))
    }

    const handleTabChange = (id) => {
        setActiveTab(id)
    }

    return (
        <div className={classes.feed}>
            <Tabs onTabChange={handleTabChange}/>
            
            {error ? error.message : null}
            {!isLoaded ? <Island>Loading...</Island> : null}
            
            {filteredPosts.length === 0 && isLoaded
                ? <Island>Nothing to show</Island> 
                : filteredPosts.map((p) => <Post key={p.id} onPostDelete={handlePostDelete} postData={p}/>)}
        </div>
    )
}

export default Feed;