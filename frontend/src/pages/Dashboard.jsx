import Users from '../components/Users'
import Footer from '../components/Footer'
import PrimaryBtn from '../components/PrimaryBtn'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <>
      <div className='bg-blue-100'>
        <div className='bg-white flex justify-between items-center p-4 py-2 fixed top-0 w-full'>
          <Link to="/"><h1 className='font-semibold text-xl font-serif'>PayTM App</h1></Link>
          <div className='flex gap-2'>
            <PrimaryBtn to={"/"} onClick={() => { localStorage.clear() }} label={"Logout"} />
          </div>
        </div>
        <div className='flex gap-4'>
          <h1 className='text-xl font-bold'>Your Balance</h1>
          <h2 className='text-xl font-bold'>$5000</h2>
        </div>
        <Users />
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
