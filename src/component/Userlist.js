import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Usercard from './Usercard';
const Userlist = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res=> setUsers(res.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div className='userlist'>
        {users.map(el => (
            <Usercard user = {el} key = {el.id}/>
        ) )}
    </div>
  )
}

export default Userlist