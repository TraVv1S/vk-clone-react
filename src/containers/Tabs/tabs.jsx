import Island from '@/uikit/island/island'
import { postsFilterChanged } from '../Feed/postsSlice'
import { useDispatch, useSelector } from 'react-redux';
import classes from './tabs.module.scss'

const tabs = ['Все записи', 'Мои записи', 'Архив записей']

const Tabs = () => {

    const { activeFilter } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const onTabClick = (e) => {
        dispatch(postsFilterChanged(+e.target.dataset.index));
    }

    return (
        <Island className={classes.tabs}>
            
                <a href="/" className={classes.search} style={{backgroundImage: `url('/img/icons/search_icon.png')`, backgroundRepeat: `no-repeat`}}></a>
                <ul className="tabs">

                    {tabs.map((tab, i) => (
                            <li key={i} className={i === activeFilter ? `${classes.link} ${classes.link_active}` : classes.link} data-index={i} onClick={onTabClick}>
                                {tab}
                            </li>
                    ))}

                </ul>
            
        </Island>
    )
}

export default Tabs;