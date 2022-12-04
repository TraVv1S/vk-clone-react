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
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        getFriends()
        getOnlineFriends()
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

    const getOnlineFriends = () => {
        fetch("/api2/users?another=true")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setOnlineFriends(result);
              
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
   
    // if (error) {
    //     return <Island>Error: {error.message}</Island>;
    //   } else if (!isLoaded) {
    //     return <Island>Loading...</Island>;
    //   } else {


        return (
        <Island>
            {error ? error.message : null}
            {isLoaded ? null : "Loading..."}

            <Widget title="Friends" count={friends.length}>

                {friends.map((f, i) => (<a key={i} href={"/id"+f.id} className={classes.friend}>
                                            <img src={f.avatarUrl} alt="" className={classes.pic} />
                                            <p className={classes.name}>{f.firstName}</p>
                                        </a>))
                            .slice(0, 6)}
                    
            </Widget>
            <div className={classes.divider}></div>
            
            <Widget title="Friends online" count={onlineFriends.length}>

                {onlineFriends.map((f, i) => (<a key={i} href={"/id"+f.id} className={classes.friend}>
                                                <img src={f.avatarUrl} alt="" className={classes.pic} />
                                                <p className={classes.name}>{f.firstName}</p>
                                            </a>))
                                .slice(0, 6)}
                
            </Widget>
        </Island>
    )
}

export default Friends;