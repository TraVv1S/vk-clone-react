import {useState} from 'react'

const useFriendsService = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    // const getFriendss = async (offset = _baseOffset) => {
    //     const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    //     return res.data.results.map(_transformCharacter);
    // }

    const getFriends = () => {
        fetch("/api2/users")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }

    return {
        getFriends,
        error,
        isLoaded
    }

}

export default useFriendsService;