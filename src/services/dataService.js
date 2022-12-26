import {useEffect, useState} from 'react'

const useDataService = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getFriends = async () => {
        const response = await fetch("/api2/users")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log('RESULT='+result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          console.log('ITEMS='+items)
          console.log('RESPONSE='+response)
        
    }

    const getOnlineFriends = () => {
        fetch("/api2/users?another=true")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
        return items
    }

    const getPosts = () => {
      let posts = []

        fetch("/api2/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              console.log('data:'+result);
              posts = result;
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      console.log('posts:'+posts)
      return posts
    }

    useEffect(() => {
      getFriends()
    }, [])

    return {
        getFriends,
        getPosts,
        getOnlineFriends,
        error,
        isLoaded
    }

}

export default useDataService;