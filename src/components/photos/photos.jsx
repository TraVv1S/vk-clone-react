import user from '../../data/user.json'

import './photos.css'

const Photos = () => {
    const {urls, count} = user.photos;
    
    return (
        <div className="account-photos island">
            <a href="/" className="island__right-link">показать на карте</a>
            <a href="/" className="island__label">
                <span className="island__label-title">Мои фотографии</span>
                <span className="island__label-count">{count}</span>
            </a>
            <div className="account-photos__photos">
                {urls.map((url) => {
                    return (
                        <a href="/" className="account-photos__photo">
                            <img className="account-photos__img" src={url} />
                        </a>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Photos;