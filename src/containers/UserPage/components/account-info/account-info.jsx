import { useState, useMemo } from 'react';
import Island from '@/uikit/island/island';
import BioBlock from '@/uikit/bioBlock/bioBlock';

import classes from './account-info.module.scss'

const AccountInfo = ({user}) => {

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    
    const onMoreInfoToggle = () => {
        setShowMoreInfo(!showMoreInfo)
    }

    const counts = useMemo(() => {
        return Object.keys(user).filter(key => user[key].count)
    }, [user])

    return (
        <Island>
            <a href="#" className={classes.online}>online</a>
            <h1 className="account-info__name">Danila Ra</h1>
            <span className="status">★★★★★☆☆☆☆☆☆☆</span>
            <div className={classes.divider}></div>

            <BioBlock info={user.basic} />

            <div>
                <button  className={classes.morelink} onClick={onMoreInfoToggle}>
                    {showMoreInfo ? 'Hide' : 'Show'} details
                </button>
            </div>
            
            { showMoreInfo ? user.more.map(block => <BioBlock info={block} />) : null }
            
            <div className={classes.divider_full}></div>

            <div className={classes.counts}>
                {counts.map((key, index) => {
                                return (
                                    <a href="/" className={classes.counter} key={index}>
                                        <div className={classes.count}>{user[key].count}</div>
                                        <div className={classes.count_title}>{key}</div>
                                    </a>
                                )
                            })}
            </div>

        </Island>
    )
    
}

export default AccountInfo;