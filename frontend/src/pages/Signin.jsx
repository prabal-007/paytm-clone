import Headder from '../components/Headder'
import Labels from '../components/Labels'
import InputFields from '../components/InputFields'
import SignBtn from '../components/SignBtn'

const Signin = () => {
  return (
    <div className='bg-gray-300 flex items-center justify-center h-[100vh] font-sans'>
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
      </div>
    </div>
  )
}

export default Signin
