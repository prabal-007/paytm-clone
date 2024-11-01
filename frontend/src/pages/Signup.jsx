import { useState } from 'react'
import axios from 'axios'
import Headder from '../components/Headder'
import Labels from '../components/Labels'
import InputFields from '../components/InputFields'
import SignBtn from '../components/SignBtn'
import { Link } from "react-router-dom"
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='bg-blue-200 flex items-center justify-center h-[100vh] font-sans'>
      <div className='w-80 gap-2 p-4 bg-white rounded-lg shadow-md flex flex-col justify-center'>
        <Headder label={"Sign Up"} desc={"Enter your information to craete an account"} />
        <form action="" method="post" className='flex flex-col'>
          <Labels label={"First Name"} />
          <InputFields onchange={e => { setFirstName(e.target.value) }} placeholder={"Tony"} type={"text"} />
          <Labels label={"Last Name"} />
          <InputFields onchange={e => { setLastName(e.target.value) }} placeholder={"Stark"} type={"text"} />
          <Labels label={"Email"} />
          <InputFields onchange={e => { setEmail(e.target.value) }} placeholder={"xyz@gmail.com"} type={"email"} />
          <Labels label={"Password"} />
          <InputFields onchange={e => { setPassword(e.target.value) }} type={"password"} placeholder={""} />
          <SignBtn label={"Sign Up"} onclick={() => {
            axios.post("http://localhost:3000/api/v1/user/signup", {
              firstName,
              lastName,
              username,
              password
            })
          }} />
        </form>
        <p className='font-semibold text-xs text-center'>Already have an account? <a href={"/signin"} className='underline'>Signin</a></p>
        <Link to="/" className='justify-center items-center flex'>
          <button className='bg-blue-500 font-semibold font-mono text-xs rounded-md py-1 px-2 flex gap-1 items-center'>Back to Home<FaArrowRightFromBracket /></button>
        </Link>
      </div>
    </div>
  )
}

export default Signup
