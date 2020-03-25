import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const history=useHistory()

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
    }, [])

    const handleClick = () =>{
        history.push('/friendform')
    }

    return(
        <div>
            {friends.map(friend => {
                return(
                    <p key={friend.id}>{friend.name}</p>
                )
            })}
            <button onClick={handleClick}>Add New friends</button>
        </div>

    )
}

export default FriendsList