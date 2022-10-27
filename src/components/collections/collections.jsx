import './collections.css'

const Collections = () => {
    return (
        <div className="account-collections island">
                    <a href="/" className="island__label">
                        <span className="island__label-title">Подписки</span>
                        <span className="island__label-count">137</span>
                    </a>
                    
                    <div className="account-collections__subscriptions">
                        <div href="/" className="account-collections__subscriptions-page">
                            <img src="/img/page1.jpg" alt="" className="account-collections__subscriptions-page-pic" />
                            <div className="account-collections__subscriptions-page-meta">
                                <a href="/" className="account-collections__subscriptions-page-name">OUR DAYS</a>
                                <p className="account-collections__subscriptions-page-status">Хит уже внутри</p>
                            </div>
                            
                        </div>
                        <div href="/" className="account-collections__subscriptions-page">
                            <img src="/img/page2.jpg" alt="" className="account-collections__subscriptions-page-pic" />
                            <div className="account-collections__subscriptions-page-meta">
                                <a href="/" className="account-collections__subscriptions-page-name">Троицк</a>
                                <p className="account-collections__subscriptions-page-status">Троицк и Троицкий район Челябинской области ☀</p>
                            </div>
                            
                        </div>
                        <div href="/" className="account-collections__subscriptions-page">
                            <a href="/"><img src="/img/page3.jpg" alt="" className="account-collections__subscriptions-page-pic" /></a>
                            <div className="account-collections__subscriptions-page-meta">
                                <a href="/" className="account-collections__subscriptions-page-name">Post-Hardcore</a>
                                <p className="account-collections__subscriptions-page-status">619</p>
                            </div>
                            
                        </div>
                        <div href="/" className="account-collections__subscriptions-page">
                            <img src="/img/page4.jpg" alt="" className="account-collections__subscriptions-page-pic" />
                            <div className="account-collections__subscriptions-page-meta">
                                <a href="/" className="account-collections__subscriptions-page-name">QT</a>
                                <p className="account-collections__subscriptions-page-status">толя</p>
                            </div>
                            
                        </div>
                        <div href="/" className="account-collections__subscriptions-page">
                            <img src="/img/page5.jpg" alt="" className="account-collections__subscriptions-page-pic" />
                            <div className="account-collections__subscriptions-page-meta">
                                <a href="/" className="account-collections__subscriptions-page-name">Десигн</a>
                                <p className="account-collections__subscriptions-page-status">Наш телеграм: https://t.me/designmdk</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="account-info__divider-full"></div>

                    <a href="/" className="island__label">
                        <span className="island__label-title">Фотоальбомы</span>
                        <span className="island__label-count">9</span>
                    </a>
                    <div className="account-collections__photo-albums">
                        <a href="/" className="account-collections__photo-albums-album" style={{backgroundImage: `url('/img/album1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}}>
                            <div className="photo-albums-album-title">
                                <div className="photo-albums-album-title-count">31</div>
                                <p className="photo-albums-album-title-name">чекиряутнау</p>
                            </div>
                        </a>
                    </div>
                    <div className="account-collections__photo-albums">
                        <a href="/" className="account-collections__photo-albums-album" style={{backgroundImage: `url('/img/album2.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}}>
                            <div className="photo-albums-album-title">
                                <div className="photo-albums-album-title-count">80</div>
                                <p className="photo-albums-album-title-name">Instagram</p>
                            </div>
                        </a>
                    </div>
                    <div className="account-info__divider-full"></div>

                    <a href="/" className="island__label">
                        <span className="island__label-title">Видеозаписи</span>
                        <span className="island__label-count">109</span>
                    </a>
                    <div className="account-collections__videos">
                        <a href="/" className="account-collections__video" style={{backgroundImage: `url('/img/video1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}>
                            <div className="photo-albums-album-overlay">
                                <div className="photo-albums-album-title-play"></div>
                                <span className="photo-albums-album-title-time">17:09</span>
                            </div>
                        </a>
                        <a href="/" className="account-collections__video" style={{backgroundImage: `url('/img/video2.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}>
                            <div className="photo-albums-album-overlay">
                                <div className="photo-albums-album-title-play"></div>
                                <span className="photo-albums-album-title-time">19:00</span>
                            </div>
                        </a>
                    </div>
                    <div className="account-info__divider-full"></div>

                    <a href="/" className="island__label">
                        <span className="island__label-title">Аудиозаписи</span>
                        <span className="island__label-count">121</span>
                    </a>
                    <div className="account-collections__audios">
                        <div className="account-collections__audios-track">
                            <div className="account-collections__audios-track-cover" style={{backgroundImage: `url('/img/audio1.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}></div>
                            <div className="account-collections__audios-track-title">
                                <p className="account-collections__audios-track-name">Shoot and Light</p>
                                <p className="account-collections__audios-track-author">Arteva</p>
                            </div>

                        </div>
                        <div className="account-collections__audios-track">
                            <div className="account-collections__audios-track-cover" style={{backgroundImage: `url('/img/audio-placeholder.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}></div>
                            <div className="account-collections__audios-track-title">
                                <p className="account-collections__audios-track-name">Dying in LA</p>
                                <p className="account-collections__audios-track-author">Panic At the Disco</p>
                            </div>

                        </div>
                        <div className="account-collections__audios-track">
                            <div className="account-collections__audios-track-cover" style={{backgroundImage: `url('/img/audio-placeholder.jpg')`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}></div>
                            <div className="account-collections__audios-track-title">
                                <p className="account-collections__audios-track-name">Praying for Rain</p>
                                <p className="account-collections__audios-track-author">Story of the Year</p>
                            </div>

                        </div>
                    </div>
                </div>
    )
}

export default Collections;