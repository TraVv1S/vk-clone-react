import Island from '../../uikit/island/island';
import Widget from '../../uikit/island/widget';
import classes from './collections.module.scss';

const Collections = () => {
    return (
        <Island>
            <Widget title="Subscriptions" count="137">
                    
                <div href="/" className={classes.subscription}>
                    <img src="/img/page1.jpg" alt="" className={classes.subscription_pic} />
                    <div className={classes.subscription_meta}>
                        <a href="/" className={classes.subscription_name}>OUR DAYS</a>
                        <p className={classes.subscription_status}>Хит уже внутри</p>
                    </div>
                </div>
                <div href="/" className={classes.subscription}>
                    <img src="/img/page2.jpg" alt="" className={classes.subscription_pic} />
                    <div className={classes.subscription_meta}>
                        <a href="/" className={classes.subscription_name}>Троицк</a>
                        <p className={classes.subscription_status}>Троицк и Троицкий район Челябинской области ☀</p>
                    </div>
                </div>
                <div href="/" className={classes.subscription}>
                    <img src="/img/page3.jpg" alt="" className={classes.subscription_pic} />
                    <div className={classes.subscription_meta}>
                        <a href="/" className={classes.subscription_name}>Post-Hardcore</a>
                        <p className={classes.subscription_status}>619</p>
                    </div>
                </div>
                <div href="/" className={classes.subscription}>
                    <img src="/img/page4.jpg" alt="" className={classes.subscription_pic} />
                    <div className={classes.subscription_meta}>
                        <a href="/" className={classes.subscription_name}>QT</a>
                        <p className={classes.subscription_status}>толя</p>
                    </div>
                </div>
                <div href="/" className={classes.subscription}>
                    <img src="/img/page5.jpg" alt="" className={classes.subscription_pic} />
                    <div className={classes.subscription_meta}>
                        <a href="/" className={classes.subscription_name}>Десигн</a>
                        <p className={classes.subscription_status}>Наш телеграм: https://t.me/designmdk</p>
                    </div>
                </div>
            </Widget>
            <div className={classes.divider}></div>

            <Widget title="Photo albums" count="9">
                        <a href="/" className={classes.photoalbum} style={{backgroundImage: `url('/img/album1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}}>
                            <div className={classes.photoalbum_title}>
                                <div className={classes.photoalbum_count}>31</div>
                                <p className={classes.photoalbum_name}>чекиряутнау</p>
                            </div>
                        </a>
                        <a href="/" className={classes.photoalbum} style={{backgroundImage: `url('/img/album2.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}}>
                            <div className={classes.photoalbum_title}>
                                <div className={classes.photoalbum_count}>80</div>
                                <p className={classes.photoalbum_name}>Instagram</p>
                            </div>
                        </a>
            </Widget>
            <div className={classes.divider}></div>

            <Widget title="Videos" count="109">
                <a href="/" className={classes.video} style={{backgroundImage: `url('/img/video1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}>
                    <div className={classes.video_overlay}>
                        <div className={classes.video_play} style={{backgroundImage: `url('/img/icons/video_play.png')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}}></div>
                        <span className={classes.video_time}>17:09</span>
                    </div>
                </a>
                <a href="/" className={classes.video} style={{backgroundImage: `url('/img/video2.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}>
                    <div className={classes.video_overlay}>
                        <div className={classes.video_play} style={{backgroundImage: `url('/img/icons/video_play.png')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}}></div>
                        <span className={classes.video_time}>19:00</span>
                    </div>
                </a>
            </Widget>
            <div className={classes.divider}></div>

            <Widget title="Music" count="121">
                <div className={classes.track}>
                    <div className={classes.track_cover} style={{backgroundImage: `url('/img/audio1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}></div>
                    <div className={classes.track_title}>
                        <p className={classes.track_name}>Shoot and Light</p>
                        <p className={classes.track_author}>Arteva</p>
                    </div>
                </div>
                <div className={classes.track}>
                    <div className={classes.track_cover} style={{backgroundImage: `url('/img/audio1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}></div>
                    <div className={classes.track_title}>
                        <p className={classes.track_name}>Dying in LA</p>
                        <p className={classes.track_author}>Panic At the Disco</p>
                    </div>
                </div>
                <div className={classes.track}>
                    <div className={classes.track_cover} style={{backgroundImage: `url('/img/audio1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}></div>
                    <div className={classes.track_title}>
                        <p className={classes.track_name}>Praying for Rain</p>
                        <p className={classes.track_author}>Story of the Year</p>
                    </div>
                </div>
                                
            </Widget>

        </Island>
    )
}

export default Collections;