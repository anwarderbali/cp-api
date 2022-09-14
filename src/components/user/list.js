import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './card'

const UserList = (props) => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res) {
            // console.log(res)
            // console.log(res.data)
            setListOfUser(res.data)
        })
        .catch(function(err) {
            console.log(err);
        })
    }, [])

    return (

        <>
            {
                listOfUser.map(item => <Card user={item} />)
            }
        </>
    )
}
export default UserList;