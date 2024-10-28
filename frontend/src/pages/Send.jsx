import React from 'react'
import Headder from '../components/Headder'
import Labels from '../components/Labels'
import InputFields from '../components/InputFields'

const Send = () => {
  return (
    <div className='bg-gray-300 flex items-center justify-center h-[100vh] font-sans'>
      <div className='w-96 gap-2 p-8 bg-white rounded-lg shadow-md flex flex-col justify-center '>
        <Headder label={"Send Money"} desc={""} />
        <div className='mt-9'>
          <div className='flex items-center gap-2 text-xl font-bold'>
            <button className='rounded-full bg-green-500 text-white px-3 py-1 font-medium'>S</button>
            <p>Tony Stark</p>
          </div>

          <form action="" method="post" className='flex flex-col'>
            <Labels label={"Amount (in Rs)"} />
            <InputFields type={Number} placeholder={"Enter Amount"} />
            <button className='bg-green-500 text-white p-2 py-1 my-2 text-sm font-medium rounded-md'>Initiate Trasfer</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Send
