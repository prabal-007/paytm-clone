import Headder from '../components/Headder'
import Labels from '../components/Labels'
import InputFields from '../components/InputFields'
import SignBtn from '../components/SignBtn'
import { Link } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Signin = () => {
  return (
    <div className='bg-blue-200 flex items-center justify-center h-[100vh] font-sans'>
      <div className='w-80 gap-2 p-4 bg-white rounded-lg shadow-md flex flex-col justify-center'>
        <Headder label={"Sign In"} desc={"Enter your credentials to access your account"} />
        <form action="" method="post" className='flex flex-col'>
          <Labels label={"Email"} />
          <InputFields placeholder={"xyz@gmail.com"} type={"email"} />
          <Labels label={"Password"} />
          <InputFields type={"password"} placeholder={""} />
          <SignBtn label={"Sign In"} />
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
