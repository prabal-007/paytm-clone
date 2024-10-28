import React from 'react'
import SignBtn from './SignBtn'

const User = ({dp, name}) => {
    return (
        <div className='font-semibold flex justify-between p-2'>
            <div className='flex items-center gap-2'>
                <button className='rounded-full bg-gray-200 p-2 text-sm font-semibold'>{dp}</button>
                <p>{name}</p>
            </div>
            <SignBtn label={"Send Money"} />
        </div>
    )
}

export default User
