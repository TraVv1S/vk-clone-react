import { useState } from 'react';
import user from '../../data/user.json'

import './account-info.css'

const AccountInfo = () => {

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showEditLink, setShowEditLink] = useState(false)

    const onMoreInfoToggle = () => {
        setShowMoreInfo(!showMoreInfo)
    }

    // const onInfoBlockHover = () => {
    //     setShowEditLink(!showEditLink)
    // }

    const renderInfo = (obj) => {
        const items = Object.keys(obj.data).map((key, index) => {
            return (
                <div className="account-info__row" key={index}>
                    <h3 className="account-info__title">{key}:</h3>
                    <a href="#" className="account-info__value">{obj.data[key]}</a>
                </div>
            )
        });

        return (
            <div className="account-info__more-main account-info__more-category">
                {showEditLink ? <a href="" className="account-info__more-category-edit">Edit</a> : null}
                {obj.title ? <h2 className="account-info__more-header">{obj.title}</h2> : null}
                {items}
            </div>
        )
    }
    
    const MoreInfo = () => {
        return (
            <div className="account-info__more">
                {renderInfo(user.more.main)}
                {renderInfo(user.more.contacts)}
                {renderInfo(user.more.education)}
            </div>
        )
    }

    const Counts = () => {
        const counts = Object.keys(user)
                            .filter(key => user[key].count)
                            .map((key, index) => {
                                return (
                                    <a href="/" className="account-info__counter" key={index}>
                                        <div className="account-info__count">{user[key].count}</div>
                                        <div className="account-info__count-title">{key}</div>
                                    </a>
                                )
                            })
                            
        return (
            <div className="account-info__counts">
                {counts}
            </div>
        )
    }

    return (
        <div className="account-info island">
            <a href="/" className="island__right-link">online</a>
            <h1 className="account-info__name">Данила Рапоткин</h1>
            <span className="status">★★★★★☆☆☆☆☆☆☆</span>
            <div className="account-info__divider"></div>

            {renderInfo(user.basic)}

            <div className="account-info__more-toggle">
                <button href="/"
                        className="account-info__more-link"
                        onClick={onMoreInfoToggle}>Показать подробную информацию</button>
            </div>
            
            { showMoreInfo ? <MoreInfo /> : null }
            
            <div className="account-info__divider-full"></div>

            <Counts />

        </div>
    )
    
}

export default AccountInfo;