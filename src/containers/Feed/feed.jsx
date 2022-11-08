import { useState } from 'react'
import Post from '../Post/post'
import Tabs from '../Tabs/tabs'

import classes from './feed.module.scss'


const Feed = ({user}) => {
    
    const posts = [...user.posts]
    
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const handlePostDelete = (postId) => {
        setFilteredPosts(filteredPosts.filter(post => post.id != postId))
    }

    const handleTabChange = (id) => {
        switch(id) {
            case '1': 
                setFilteredPosts(posts.filter(post => post.author_id === user.id))
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
            {filteredPosts.map((p) => <Post key={p.id} onPostDelete={handlePostDelete} postData={p}/>)}
        </div>
    )
}

export default Feed;