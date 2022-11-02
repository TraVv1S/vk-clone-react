import Post from '../post/post'

import user from '../../data/user.json'
import classes from './feed.module.scss'
import Island from '../../uikit/island/island'

const Feed = () => {
    
    return (
        
        <div className={classes.feed}>
            <Island className={classes.tabs}>
            
                <a href="/" className={classes.search} style={{backgroundImage: `url('/img/icons/search_icon.png')`, backgroundRepeat: `no-repeat`}}></a>

                <ul className="tabs">
                    <li className={classes.tab}>
                        <a href="/" className={`${classes.link} ${classes.link_active}`}>
                            Все записи
                        </a>
                    </li>
                    <li className={classes.tab}>
                        <a href="/" className={classes.link}>Мои записи</a>
                    </li>
                    <li className={classes.tab}>
                        <a href="/" className={classes.link}>Архив записей</a>
                    </li>
                </ul>

                {/* <div className="account-info__divider-full"></div> */}
            
            </Island>
            {user.posts.filter(p => p.archived == false).map((p,i) => <Post postNum={i}/>)}
            
        </div>
        
    )
}

export default Feed;