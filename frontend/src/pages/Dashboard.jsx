import Users from '../components/Users'
import Footer from '../components/Footer'

const Dashboard = () => {

  return (
    <div className='p-5 w-[100vw] h-[100vh] flex flex-col gap-4 bg-blue-100'>
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
      <Users />
      <Footer />
    </div>
  )
}

export default Dashboard
