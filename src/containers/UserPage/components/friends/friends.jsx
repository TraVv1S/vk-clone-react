import Island from '@/uikit/island/island';
import Widget from '@/uikit/widget/widget';
import { useEffect } from 'react';
import classes from './friends.module.scss';
import { useHttp } from '@/hooks/http.hook';

import { useDispatch, useSelector } from 'react-redux';

import { fetchFriends, fetchOnlineFriends } from '@/actions';

const Friends = () =>{

    const { friends, onlineFriends } = useSelector(state => state.friends);
    const dispatch = useDispatch();
    const {request} = useHttp();


    useEffect(() => {
        dispatch(fetchFriends(request));
        dispatch(fetchOnlineFriends(request));
        
    }, [])

    return (
      <Island>
          
          {(friends.loading === "error") 
          ? "Error!"
          : (friends.loading === "loading")
            ? "Loading..."
            : <Widget title="Friends" count={friends.list.length}>

                {friends.list.map((f, i) => (<a key={i} href={"/id"+f.id} className={classes.friend}>
                                            <img src={f.avatarUrl} alt="" className={classes.pic} />
                                            <p className={classes.name}>{f.firstName}</p>
                                        </a>))
                            .slice(0, 6)}
                    
              </Widget>}
          
          <div className={classes.divider}></div>
          
          {(onlineFriends.loading === "error") 
          ? "Error!"
          : (onlineFriends.loading === "loading")
            ? "Loading..."
            :
          <Widget title="Friends online" count={onlineFriends.list.length}>

              {onlineFriends.list.map((f, i) => (<a key={i} href={"/id"+f.id} className={classes.friend}>
                                              <img src={f.avatarUrl} alt="" className={classes.pic} />
                                              <p className={classes.name}>{f.firstName}</p>
                                          </a>))
                              .slice(0, 6)}
              
          </Widget>}
      </Island>
    )
}

export default Friends;