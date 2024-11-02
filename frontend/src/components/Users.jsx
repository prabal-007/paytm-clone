import { useEffect, useState } from 'react';
import axios from 'axios';
import SignBtn from './SignBtn';
import { useNavigate } from 'react-router-dom'


const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const debouncedSearchTerm = useDebounce(filter, 500);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            })
    }, [filter, debouncedSearchTerm])

    return (
        <>
            <div className='flex flex-col gap-0'>
                <h1 className='text-xl font-semibold'>Contacts</h1>
                <input type="text" onChange={(e) => { setFilter(e.target.value) }} placeholder='Search contacts....' className='p-2 border w-1/2 m-5 rounded-lg font-semibold my-4' />
                {users.map(user => <User key={user.userID} user={user} />)}
            </div>
        </>
    )
}

const User = ({ user }) => {
    const navigate = useNavigate();
    return (<>
        <div className='font-semibold flex justify-between p-2 pb-0 mx-5'>
            <div className='font-semibold flex justify-between p-2 w-[20%]'>
                <div className='flex items-center gap-2'>
                    <button className='rounded-full bg-gray-200 p-2 text-sm font-semibold'>{user.firstName[0]}</button>
                    <p>{user.firstName}</p>
                </div>
                {console.log(user)}
                <SignBtn label={"Send Money"} onClick={() => navigate("/send?id=" + user.userID + "&name=" + user.firstName)} />
            </div>
        </div>
    </>
    )
}

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default Users
