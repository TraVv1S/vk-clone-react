import { useState } from 'react'
import Island from '@/uikit/island/island'

import classes from './tabs.module.scss'

const tabs = ['Все записи', 'Мои записи', 'Архив записей']

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState(0);

    const onTabClick = (e) => {
        setActiveTab(+e.target.dataset.index);
        props.onTabChange(e.target.dataset.index);
    }

    return (
        <Island className={classes.tabs}>
            
                <a href="/" className={classes.search} style={{backgroundImage: `url('/img/icons/search_icon.png')`, backgroundRepeat: `no-repeat`}}></a>
                <ul className="tabs">

                    {tabs.map((tab, i) => (
                            <li key={i} className={i === activeTab ? `${classes.link} ${classes.link_active}` : classes.link} data-index={i} onClick={onTabClick}>
                                {tab}
                            </li>
                    ))}

                </ul>
            
        </Island>
    )
}

export default Tabs;