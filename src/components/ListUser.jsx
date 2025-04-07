import React, { useEffect, useState } from 'react'
import User from './User';
import axios from 'axios';

const ListUser = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchUsers = async() => {
    //         const url = 'https://jsonplaceholder.typicode.com/users';
    //         const res = await fetch(url);
    //         const users = await res.json();
    //         setUsers(users)
    //     }
    //     fetchUsers()
    // },[])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    },[])

    return users.map(user => <User key={user.id} user={user} />)
}

export default ListUser