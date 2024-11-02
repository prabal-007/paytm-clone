import Headder from '../components/Headder'
import Labels from '../components/Labels'
import InputFields from '../components/InputFields'
import SignBtn from '../components/SignBtn'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useState } from 'react'
import axios from 'axios'

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='bg-blue-100 flex items-center justify-center h-[100vh] font-sans'>
      <div className='w-80 gap-2 p-4 bg-white rounded-lg shadow-md flex flex-col justify-center'>
        <Headder label={"Sign In"} desc={"Enter your credentials to access your account"} />
        <form action="" method="post" className='flex flex-col'>
          <Labels label={"Email"} />
          <InputFields placeholder={"xyz@gmail.com"} type={"email"} onChange={e => { setUsername(e.target.value) }} />
          <Labels label={"Password"} />
          <InputFields type={"password"} onChange={e => { setPassword(e.target.value) }} placeholder={""} />
          <SignBtn label={"Sign In"} onClick={async () => {
            // console.log(username)
            try {
              console.log("Sign In button clicked");
              const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                username,
                password
              })
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard");
            } catch (err) {
              console.log(err);
              alert("Error in login!")
            }
          }} />
        </form>
        <p className='font-semibold text-xs text-center'>Don't have an account? <a href={"/signup"} className='underline'>SignUp</a></p>
        <Link to="/" className='justify-center items-center flex'>
          <button className='bg-blue-500 font-semibold font-mono text-xs rounded-md py-1 px-2 flex gap-1 items-center'>Back to Home<FaArrowRightFromBracket /></button>
        </Link>
      </div>
    </div>
  )
}

export default Signin
