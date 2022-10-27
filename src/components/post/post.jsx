import './post.css'
import user from '../../data/user.json'

const Post = (props) => {
    const num = props.postNum;
    // repost

    const renderMedia = () => {

        return (
            <div className="post__media">
                {user.posts[num].media.video 
                ? (<div className="post__media-video">
                            <iframe width="520" height="315" src={user.posts[num].media.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                         </div>)
                : null
                }

                {user.posts[num].media.photo 
                ? (<div className="post__media-pics">
                    <a href="/" className="post__media-pic-link">
                        <img src={user.posts[num].media.photo} alt="" className="post__media-pic" />
                    </a>
                </div>)
                : null
                }
                
                {user.posts[num].media.audio 
                ? (<div className="post__media-audio">
                    <div className="post__media-audio-header">
                        <div className="post__media-audio-cover"></div>
                        <div className="post__media-audio-meta">
                            <p><a href="/" className="post__media-audio-title">Через тернии</a></p>
                            <p><a href="/" className="post__media-audio-meta">Our DaysРок, Альтернатива2022</a></p>
                        </div>

                        <ul className="post__media-audio-controls">
                            <li className="post__media-audio-control play-button">
                                <a href="/" className="post__media-audio-control-link play-button-link" >
                                    <object data="img/icons/play.svg" width="24" height="24"> </object>
                                </a>
                            </li>
                            <li className="post__media-audio-control add-button">
                                <a href="/" className="post__media-audio-control-link add-button-link" >
                                    <object data="img/icons/plus.svg" width="24" height="24"> </object>
                                </a>
                            </li>
                            <li className="post__media-audio-control share-button">
                                <a href="/" className="post__media-audio-control-link share-button-link" >
                                    <object data="img/icons/share.svg" width="24" height="24"> </object>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="post__media-audio-list">
                        <li className="post__media-audio-track">
                            <div className="post__media-audio-track-time">3:04</div>
                            <div className="post__media-audio-track-counter">1</div>
                            <p className="post__media-audio-track-meta">Our Days - Через тернии</p>
                            
                        </li>
                    </ul>

                </div>)
                : null
                }

                {user.posts[num].media.link 
                ? (<div className="post__media-reachlink">
                    <div className="post__media-reachlink-cover"></div>
                    <div className="post__media-reachlink-meta">
                        <p><a href={user.posts[num].media.link} className="post__media-reachlink-title">Our Days - Через тернии | BandLink</a></p>
                        <p><a href={user.posts[num].media.link} className="post__media-reachlink-domain">band.link</a></p>
                    </div>
                </div>)
                : null
                }

            </div>
        )
    }

    return (
        <div key={user.posts[num].id} className="account-feed__post post island">
            <div className="account-feed__post-header post__header">
                <a href="/" className="account-feed__post-ava post__ava">
                    <img src="/img/ava_s.jpg" alt="ava small" className="account-feed__post-ava-pic post__ava-pic" />
                </a>
                <a href="/" className="account-feed__post-options island__right-link post__options">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="more_horizontal_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="more_horizontal_24__more_horizontal_24"><path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path><path d="M18 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.1.9-2 2-2zm-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2zm-6 0a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2z" id="more_horizontal_24__Mask" fill="currentColor"></path></g></g></svg>
                </a>
                <a href="/" className="account-feed__post-author-link post__author-link">
                    <h4 className="account-feed__post-author post__author">{`${user.name} ${user.surname}`}</h4>
                </a>
                <a href="/" className="account-feed__post-time-link post__time-link">{user.posts[num].time}</a>
                
            </div>
            
            <div className="account-feed__post-content post__content">
                
                <a href="/" className="post__text-link">
                    <p className="account-feed__post-text post__text">
                        {user.posts[num].text.join('\r\n')}
                    </p>
                </a>
                {renderMedia()}
            </div>

            <div className="account-feed__post-footer post__footer">
                <span className="post__footer-views">
                    <div className="post__footer-views-icon">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path clipRule="evenodd" d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fillRule="evenodd"></path></g></svg>
                    </div>
                    {user.posts[num].views}
                </span>
                <ul className="post__footer-actions">
                    <li className="post__footer-action">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16 4a5.95 5.95 0 00-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 007.73 4 5.73 5.73 0 002 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0016.27 4zm.27 1.8a3.93 3.93 0 013.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 01-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 017.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 001.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        {user.posts[num].likes}
                    </li>
                    <li className="post__footer-action">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 00-1.31-1.31A4.51 4.51 0 0016.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 00-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 01-1.14-.23 1.37 1.37 0 01-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        {user.posts[num].comments}
                    </li>
                    <li className="post__footer-action">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 00-7.83 10.72.9.9 0 001.61.46l.19-.24a9.08 9.08 0 015.84-3.26l.2-.03.01 2.5a2.15 2.15 0 003.48 1.69l7.82-6.14a2.15 2.15 0 000-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 010 .55l-7.82 6.13a.35.35 0 01-.57-.28V14.7a.9.9 0 00-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 016.97-6.53.9.9 0 00.79-.9V5.87c0-.2.16-.35.35-.35z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        {user.posts[num].reposts}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post;