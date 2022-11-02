import { useState } from 'react';
import Island from '../../uikit/island/island';
import user from '../../data/user.json'

import classes from './account-info.module.scss'

const AccountInfo = () => {

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showEditLink, setShowEditLink] = useState(false)

    const onMoreInfoToggle = () => {
        setShowMoreInfo(!showMoreInfo)
    }

    // не стоит создавать функции в ф.компоненте без оборачивания
    const renderInfo = (obj) => {
        const items = Object.keys(obj.data).map((key, index) => {
            return (
                <div className={classes.row} key={index}>
                    <h3 className={classes.title}>{key}:</h3>
                    <a href="#">{obj.data[key]}</a>
                </div>
            )
        });

        return (
            <div className={classes.category}>
                {showEditLink ? <a href="" className={classes.category_edit}>Edit</a> : null}
                {obj.title ? <h2 className={classes.category_header}>{obj.title}</h2> : null}
                {items}
            </div>
        )
    }
    
    const MoreInfo = () => {
        return (
            <div>
                {renderInfo(user.more.main)}
                {renderInfo(user.more.contacts)}
                {renderInfo(user.more.education)}
            </div>
        )
    }

    // не стоит создавать функции в ф.компоненте без оборачивания. Через useMemo Object.keys(user).filter a через render .map
    const Counts = () => {
        const counts = Object.keys(user)
                            .filter(key => user[key].count)
                            .map((key, index) => {
                                return (
                                    <a href="/" className={classes.counter} key={index}>
                                        <div className={classes.count}>{user[key].count}</div>
                                        <div className={classes.count_title}>{key}</div>
                                    </a>
                                )
                            })
                            
        return (
            <div className={classes.counts}>
                {counts}
            </div>
        )
    }

    return (
        <Island>
            <a href="/" className={classes.online}>online</a>
            <h1 className="account-info__name">Danila Ra</h1>
            <span className="status">★★★★★☆☆☆☆☆☆☆</span>
            <div className={classes.divider}></div>

            {renderInfo(user.basic)}

            <div>
                <button href="/"
                        className={classes.morelink}
                        onClick={onMoreInfoToggle}>Show details</button>
            </div>
            
            { showMoreInfo ? <MoreInfo /> : null }
            
            <div className={classes.divider_full}></div>

            <Counts />

        </Island>
    )
    
}

export default AccountInfo;