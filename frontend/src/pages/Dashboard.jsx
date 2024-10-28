import React from 'react'
import SignBtn from '../components/SignBtn'
import User from '../components/User'

const Dashboard = () => {
  return (
    <div className='p-5 w-[100vw] h-[80vh] flex flex-col gap-4'>
      <div className='flex justify-between border-b-2 p-2'>
        <h1 className='text-2xl font-bold'>Payments App</h1>
        <div className='flex items-center gap-2'>
          <p>Hello, user</p>
          <button className='rounded-full bg-gray-200 p-1 px-2 text-sm'>U</button>
        </div>
      </div>
      <div className='flex gap-4'>
        <h1 className='text-xl font-bold'>Your Balance</h1>
        <h2 className='text-xl font-bold'>$5000</h2>
      </div>
      <div className='flex flex-col gap-0'>
        <h1 className='text-xl font-semibold'>Contacts</h1>
        <input type="text" placeholder='Search contacts....' className='p-2 border w-full rounded-md font-semibold my-4' />
        <User dp={"U1"} name={"user 1"} />
        <User dp={"U2"} name={"user 2"} />
        <User dp={"U3"} name={"user 3"} />
        <User dp={"U4"} name={"user 4"} />
      </div>
    </div>
  )
}

export default Dashboard
