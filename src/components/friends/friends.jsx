import user from '../../data/user.json'

import './friends.css'

const Friends = () =>{

    return (
        <div className="account-friends island">
            <a href="/" className="island__right-link">обновления</a>
            <a href="/" className="island__label">
                <span className="island__label-title">Друзья</span>
                <span className="island__label-count">289</span>
            </a>
            
            <div className="account-friends__friends island__content">
                {user.friends.map(f => (<a href={"/"+f.id} className="account-friends__friend">
                                            <img src={f.ava} alt="" className="account-friends__friend-pic" />
                                            <p className="account-friends__friend-name">{f.name}</p>
                                        </a>))
                            .slice(0, 6)}
            </div>

            <div className="account-info__divider-full"></div>
            <a href="/" className="island__label">
                <span className="island__label-title">Друзья онлайн</span>
                <span className="island__label-count">20</span>
            </a>

            <div className="account-friends__friends island__content">
                {user.friends.filter(f => f.online).map(f => (<a href={"/"+f.id} className="account-friends__friend">
                                                <img src={f.ava} alt="" className="account-friends__friend-pic" />
                                                <p className="account-friends__friend-name">{f.name}</p>
                                            </a>))
                                .slice(0, 6)}
            </div>
        </div>
    )
}

export default Friends;