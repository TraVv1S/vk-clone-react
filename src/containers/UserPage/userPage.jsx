import AccountInfo from './components/account-info/account-info'
import Photos from './components/photos/photos'
import NewPost from './components/new-post/new-post';
import Feed from '../Feed/feed';
import Ava from './components/ava/ava'
import Friends from './components/friends/friends'
import Collections from './components/collections/collections'
import Gifts from './components/gifts/gifts';

const UserPage = ({user}) => {
    
    return (
        <>
            <div className="column-s">
                
                <Ava />
                <Gifts />
                <Friends/>
                <Collections />
            </div>
            <div className="column-m">
                <AccountInfo user={user}/>
                <Photos user={user}/>
                <NewPost user={user}/>
                <Feed />
                <hr/>
            </div>
        </>
    )
}

export default UserPage;