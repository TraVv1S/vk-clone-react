import Island from '@/uikit/island/island';
import Widget from '@/uikit/widget/widget';
import { useEffect, useState, useMemo } from 'react';
import classes from './friends.module.scss';
// import useFriendsService from '@/services/friendsService';

const Friends = () =>{

    // const {isLoaded, error, getFriends} = useFriendsService();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        fetch("/api2/users")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setFriends(result);
              console.log(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }

    // useEffect(() => {
    //     setFriends(getFriends())
    // }, [])
   
    if (error) {
        return <Island>Error: {error.message}</Island>;
      } else if (!isLoaded) {
        return <Island>Loading...</Island>;
      } else {
        return (
        <Island>
            <Widget title="Friends" count="289">

                {friends.map((f, i) => (<a key={i} href={"/id"+f.id} className={classes.friend}>
                                            <img src={f.avatarUrl} alt="" className={classes.pic} />
                                            <p className={classes.name}>{f.firstName}</p>
                                        </a>))
                            .slice(0, 6)}
                    
            </Widget>
            <div className={classes.divider}></div>
            
            <Widget title="Friends online" count="20">
                
                    {/* {user.friends.filter(f => f.online).map((f, i) => (<a key={i} href={"/"+f.id} className={classes.friend}>
                                                    <img src={f.ava} alt="" className={classes.pic} />
                                                    <p className={classes.name}>{f.name}</p>
                                                </a>))
                                    .slice(0, 6)} */}
                
            </Widget>
        </Island>
    )
}}

export default Friends;