import { useState, useMemo } from 'react';
import Island from '@/uikit/island/island';

import classes from './account-info.module.scss'

const AccountInfo = (props) => {

    const user = props.user

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    

    const onMoreInfoToggle = () => {
        setShowMoreInfo(!showMoreInfo)
    }

    // не стоит создавать функции в ф.компоненте без оборачивания
    const renderInfo = (obj) => {
        const items = Object.keys(obj.data).map((key, index) => {
            return (
                <div className={classes.row} key={index}>
                    <h3 className={classes.title}> {key}: </h3>
                    <a href="#">{obj.data[key]}</a>
                </div>
            )
        });

        return (
            <div className={classes.category}>
                
                {obj.title ? <h2 className={classes.category_header}>{obj.title}</h2> : null}
                {items}
            </div>
        )
    }

    
    
    
    const MoreInfo = () => {
        return (
            <div>
                {/* {renderInfo(user.more.main)}
                {renderInfo(user.more.contacts)}
                {renderInfo(user.more.education)} */}

                

                <div className={classes.category}>
                    <h2 className={classes.category_header}>{user.more.main.title}</h2>
                    {Object.keys(user.more.main.data).map((key, index) => {
                        return (
                            <div className={classes.row} key={index}>
                                <h3 className={classes.title}> {key}: </h3>
                                <a href="#">{user.more.main.data[key]}</a>
                            </div>
                        )
                    })}
                </div>

                <div className={classes.category}>
                    <h2 className={classes.category_header}>{user.more.contacts.title}</h2>
                    {Object.keys(user.more.contacts.data).map((key, index) => {
                        return (
                            <div className={classes.row} key={index}>
                                <h3 className={classes.title}> {key}: </h3>
                                <a href="#">{user.more.contacts.data[key]}</a>
                            </div>
                        )
                    })}
                </div>

                <div className={classes.category}>
                    <h2 className={classes.category_header}>{user.more.education.title}</h2>
                    {Object.keys(user.more.education.data).map((key, index) => {
                        return (
                            <div className={classes.row} key={index}>
                                <h3 className={classes.title}> {key}: </h3>
                                <a href="#">{user.more.education.data[key]}</a>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }

    // не стоит создавать функции в ф.компоненте без оборачивания. Через useMemo Object.keys(user).filter a через render - .map   
    // const Counts = () => {
    //     console.log('---counts---')
    //     const counts = Object.keys(user)
    //                         .filter(key => user[key].count)
    //                         .map((key, index) => {
    //                             return (
    //                                 <a href="/" className={classes.counter} key={index}>
    //                                     <div className={classes.count}>{user[key].count}</div>
    //                                     <div className={classes.count_title}>{key}</div>
    //                                 </a>
    //                             )
    //                         })
                            
    //     return (
    //         <div className={classes.counts}>
    //             {counts}
    //         </div>
    //     )
    // }

    const counts = useMemo(() => {
        // console.log('---counts---')
        return Object.keys(user).filter(key => user[key].count)
    }, [user])

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