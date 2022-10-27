import Post from '../post/post'

import user from '../../data/user.json'
import './feed.css'

const Feed = () => {
    
    return (
        <div className="account-feed">
            <div className="account-feed__navigation island">
                <a href="/" className="account-feed__search island__right-link"></a>

                <ul className="account-feed__tabs island__tabs">
                    <li className="account-feed__tab island__tab">
                        <a href="/" className="island__tab-link active">
                            <span className="island__label-title">Все записи</span>
                        </a>
                    </li>
                    <li className="account-feed__tab island__tab">
                        <a href="/" className="island__tab-link">Мои записи</a>
                    </li>
                    <li className="account-feed__tab island__tab">
                        <a href="/" className="island__tab-link">Архив записей</a>
                    </li>
                </ul>

                {/* <div className="account-info__divider-full"></div> */}
            </div>
        
            {user.posts.filter(p => p.archived == false).map((p,i) => <Post postNum={i}/>)}
            
        </div>
    )
}

export default Feed;