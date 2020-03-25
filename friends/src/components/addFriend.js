import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'

const AddFriend = () => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: 3
    })
    const history = useHistory()
    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        AddFriend(friend)
        setFriend({...friend, id: friend.id+1})
        history.push('./friendslist')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} />
            <input type='number' name='age' onChange={handleChange} />
            <input type='email' name='email' onChange={handleChange} />
            <input type='submit'/>
        </form>
    )
}

export default AddFriend;