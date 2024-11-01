import { Link } from "react-router-dom"
import SignBtn from './SignBtn'
import PrimaryBtn from "./PrimaryBtn"

const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center p-4 py-2 fixed top-0 w-full'>
      <h1 className='font-semibold text-xl font-serif'>Payments App</h1>
      <div className='flex gap-2'>
        <PrimaryBtn to={"/signup"} label={"Signup"} />
        <PrimaryBtn to={"/signin"} label={"Signin"} />
        {/* <Link to={"/signup"}><SignBtn label={"Signup"} /></Link>  */}
        {/* <Link to={"/signin"}><SignBtn label={"Signin"} /></Link> */}
      </div>
    </div>
  )
}

export default Navbar
