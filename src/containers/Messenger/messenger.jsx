import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from '@/actions';
import { useHttp } from '@/hooks/http.hook';
import classes from './messenger.module.scss';

import Island from '@/uikit/island/island'

const Messenger = () => {

    const { friends } = useSelector(state => state.friends);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchFriends(request))
    }, [])

    return (
        <>
            <div className="column-m">
                <Island>
                    <div className={classes.dialogues}>
                        {friends.list.map(f => <div href="/" className={classes.dialogue} key={f.id}>
                                                    <a href="/" className={classes.rightlink}>4:20</a>
                                                    <img src={f.avatarUrl} alt="" className={classes.pic} />
                                                    <div className={classes.meta}>
                                                        <a href="/" className={classes.name}>{f.firstName}</a>
                                                        <p className={classes.status}>прив чё как дел</p>
                                                    </div>
                                                </div>)}
                    </div>
                </Island>
            </div>
            <div className="column-s">
                <Island>
                    <ul className="filters">
                            <li className="filter active"><a href="#">Все сообщения</a></li> 
                            <li className="filter"><a href="#">Важные</a></li>
                            <li className="filter"><a href="#">Непрочитанные</a></li>
                    </ul>
                </Island>
            </div>
        </>
    )
}

export default Messenger;