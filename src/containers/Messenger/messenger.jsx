import { useState, useEffect } from 'react'
import Island from '@/uikit/island/island'
import useDataService from '@/services/dataService';


const Messenger = () => {

    const {isLoaded, error, items} = useDataService();
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    const [friends, setFriends] = useState([]);

    // const getFriends = async () => {
    //     const response = await fetch("/api2/users")   
    //       .then(res => res.json()) 
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setFriends(result);
    //         },
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error); 
    //         }
    //       )
    // }

    useEffect(() => {
        setFriends(items) 
        console.log('friends:'+friends)
    }, [])

    return (
        <>
            <div className="column-m">
                <Island>
                    <div className="dialogues">
                        {friends.map(f => <div href="/" className="dialogues__dialogue">
                                                    <a href="/" className="island__right-link">4:20</a>
                                                    <img src={f.avatarUrl} alt="" className="dialogues__dialogue-pic" />
                                                    <div className="dialogues__dialogue-meta">
                                                        <a href="/" className="dialogues__dialogue-name">{f.firstName}</a>
                                                        <p className="dialogues__dialogue-status">прив чё как дел</p>
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