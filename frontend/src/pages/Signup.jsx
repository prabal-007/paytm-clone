import React from 'react'
import Headder from '../components/Headder'
import Labels from '../components/Labels'
import InputFields from '../components/InputFields'
import SignBtn from '../components/SignBtn'

const Signup = () => {
  return (
    <div className='bg-gray-300 flex items-center justify-center h-[100vh] font-sans'>
      <div className='w-80 gap-2 p-4 bg-white rounded-lg shadow-md flex flex-col justify-center'>
        <Headder label={"Sign Up"} desc={"Enter your information to craete an account"} />
        <form action="" method="post" className='flex flex-col'>
          <Labels label={"First Name"} />
          <InputFields placeholder={"Tony"} type={"text"} />
          <Labels label={"Last Name"} />
          <InputFields placeholder={"Stark"} type={"text"} />
          <Labels label={"Email"} />
          <InputFields placeholder={"xyz@gmail.com"} type={"email"} />
          <Labels label={"Password"} />
          <InputFields type={"password"} placeholder={""} />
          <SignBtn label={"Sign Up"} />
        </form>
        <p className='font-semibold text-xs text-center'>Already have an account? <a href={"/signin"} className='underline'>Signin</a></p>
      </div>
    </div>
  )
}

export default Signup
