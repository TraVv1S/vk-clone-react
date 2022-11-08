import { useState } from 'react';
import Island from '@/uikit/island/island';
import classes from './post.module.scss'
import user from '@/data/user.json'

const Post = (props) => {

    const data = props.postData;

    let [likes, setLikes] = useState(+data.likes)

    const onLike = () => {
        setLikes(++likes)
    }

    const onDelete = () => {
        props.onPostDelete(data.id);
    }

    const renderMedia = () => {

        return (

            // imagine that here is a component for each media type
            <div className="post__media">
                {data.media.video 
                ? (<div className={classes.media_video}>
                            <iframe width="520" height="315" src={data.media.video} title="YouTube video player" frameBorder="0" ></iframe>
                         </div>)
                : null
                }

                {data.media.photo 
                ? (<div className={classes.media_pics}>
                    <a href="/">
                        <img src={data.media.photo} alt="" className={classes.media_pic} />
                    </a>
                </div>)
                : null
                }
                
                {data.media.audio 
                ? (<div className={classes.media_audio}>
                    <div className={classes.media_audio_header}>
                        <div className={classes.media_audio_cover} style={{background: `url('/img/post1-audio-cover.jpg') no-repeat center center  /cover`}}></div>
                        <div className={classes.media_audio_meta}>
                            <p><a href="/" className={classes.media_audio_title}>Через тернии</a></p>
                            <p><a href="/" className={classes.media_audio_meta}>Our Days Рок, Альтернатива 2022</a></p>
                        </div>

                        <ul className={classes.media_audio_controls}>
                            <li className={classes.media_audio_control}>
                                <a href="/" className={classes.media_audio_control_link} >
                                    <object data="img/icons/play.svg" width="24" height="24"> </object>
                                </a>
                            </li>
                            <li className={classes.media_audio_control}>
                                <a href="/" className={classes.media_audio_control_link} >
                                    <object data="img/icons/plus.svg" width="24" height="24"> </object>
                                </a>
                            </li>
                            <li className={classes.media_audio_control}>
                                <a href="/" className={classes.media_audio_control_link} >
                                    <object data="img/icons/share.svg" width="24" height="24"> </object>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className={classes.media_audio_list}>
                        <li className={classes.media_audio_track}>
                            <div className={classes.media_audio_track_time}>3:04</div>
                            <div className={classes.media_audio_track_counter}>1</div>
                            <p className={classes.media_audio_track_meta}>Our Days - Через тернии</p>
                            
                        </li>
                    </ul>

                </div>)
                : null
                }

                {data.media.link 
                ? (<div className={classes.media_reachlink}>
                    <div className={classes.media_reachlink_cover} style={{background: `url('/img/post1-audio-cover.jpg') no-repeat center center /cover`}}></div>
                    <div className={classes.media_reachlink_meta}>
                        <p><a href={data.media.link} className={classes.media_reachlink_title}>Our Days - Через тернии | BandLink</a></p>
                        <p><a href={data.media.link}>band.link</a></p>
                    </div>
                </div>)
                : null
                }

            </div>
        )
    }

    

    return (
        <Island>
            <div className={classes.header}>
                <a href="#" className={classes.ava}>
                    <img src="/img/ava_s.jpg" alt="ava small" className={classes.ava_pic} />
                </a>

                {/* three dots menu */}
                {/* <a href="/" className={classes.options}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="more_horizontal_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="more_horizontal_24__more_horizontal_24"><path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path><path d="M18 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.1.9-2 2-2zm-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2zm-6 0a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2z" id="more_horizontal_24__Mask" fill="currentColor"></path></g></g></svg>
                </a> */}

                <button className={classes.options} onClick={onDelete}>
                    delete
                </button>
                <span href="#" className={classes.header}>
                    <h4>{`${user[0].name} ${user[0].surname}`}</h4>
                </span>
                <a href="#" className={classes.time}>{data.time}</a>
                
            </div>
            
            <div>
                
                <a href="/" className={classes.text_link}>
                    <p className={classes.text}>
                        {data.text.join('\r\n')}
                    </p>
                </a>
                {data.media ? renderMedia() : null}
            </div>

            <div>
                <span className={classes.views}>
                    <div className={classes.views_icon}>
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path clipRule="evenodd" d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fillRule="evenodd"></path></g></svg>
                    </div>
                    {data.views}
                    
                </span>
                <ul>
                    <li onClick={onLike} className={classes.action}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16 4a5.95 5.95 0 00-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 007.73 4 5.73 5.73 0 002 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0016.27 4zm.27 1.8a3.93 3.93 0 013.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 01-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 017.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 001.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        {likes}
                    </li>
                    <li className={classes.action}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 00-1.31-1.31A4.51 4.51 0 0016.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 00-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 01-1.14-.23 1.37 1.37 0 01-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        {data.comments}
                    </li>
                    <li className={classes.action}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 00-7.83 10.72.9.9 0 001.61.46l.19-.24a9.08 9.08 0 015.84-3.26l.2-.03.01 2.5a2.15 2.15 0 003.48 1.69l7.82-6.14a2.15 2.15 0 000-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 010 .55l-7.82 6.13a.35.35 0 01-.57-.28V14.7a.9.9 0 00-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 016.97-6.53.9.9 0 00.79-.9V5.87c0-.2.16-.35.35-.35z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        {data.reposts}
                    </li>
                </ul>
            </div>
        </Island>
    )
}

export default Post;