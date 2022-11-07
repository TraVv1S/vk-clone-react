import { useState } from 'react'
import Island from '@/uikit/island/island'

import classes from './tabs.module.scss'

const tabs = [{
    title: 'Все записи',
    // filterFc: function(post) {
    //     return true;
    // }
}, 
{
    title: 'Мои записи',
    // filterFc: function(post) {
    //     return post.author_id == 424242;
    // }
},   
{
    title: 'Архив записей',
    // filterFc: function(post) {
    //     return post.archived == true;
    // }
} ]

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState(0);

    const onTabClick = (e) => {
        // console.log('index ' + e.target.dataset.index);
        setActiveTab(+e.target.dataset.index);
        props.onTabChange(e.target.dataset.index)
        // console.log('activeTab ' + activeTab);
        // setFilteredPosts(user.posts.filter(post => tabs[activeTab].filterFc(post)));
    }

    return (
        <Island className={classes.tabs}>
            
                <a href="/" className={classes.search} style={{backgroundImage: `url('/img/icons/search_icon.png')`, backgroundRepeat: `no-repeat`}}></a>
                <ul className="tabs">

                    {tabs.map((tab, i) => (
                            <li className={i === activeTab ? `${classes.link} ${classes.link_active}` : classes.link} data-index={i} onClick={onTabClick}>
                                {tab.title}
                            </li>
                    ))}

                </ul>
            
        </Island>
    )
}

export default Tabs;