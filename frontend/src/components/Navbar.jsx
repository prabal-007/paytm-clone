import PrimaryBtn from "./PrimaryBtn"

const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center p-4 py-2 fixed top-0 w-full'>
      <h1 className='font-semibold text-xl font-serif'>PayTM App</h1>
      <div className='flex gap-2'>
        <PrimaryBtn to={`${localStorage.getItem("token") ? "/dashboard" : "/signup"}`} label={"Signup"} />
        <PrimaryBtn to={`${localStorage.getItem("token") ? "/dashboard" : "/signin"}`} label={"Signin"} />
      </div>
    </div>
  )
}

export default Navbar
