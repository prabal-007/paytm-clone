import Headder from '../components/Headder';
import Labels from '../components/Labels';
import InputFields from '../components/InputFields';
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Send = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0)

  return (
    <div className='bg-gray-300 flex items-center justify-center h-[100vh] font-sans'>
      <div className='w-96 gap-2 p-8 bg-white rounded-lg shadow-md flex flex-col justify-center '>
        <Headder label={"Send Money"} desc={""} />
        <div className='mt-9'>
          <div className='flex items-center gap-2 text-xl font-bold'>
            <button className='rounded-full bg-green-500 text-white px-3 py-1 font-medium'>{name[0]}</button>
            <p>{name}</p>
          </div>

          <form action="" method="post" className='flex flex-col'>
            <Labels label={"Amount (in Rs)"} />
            <InputFields onChange={e => { setAmount(e.target.value) }} type={Number} placeholder={"Enter Amount"} />
            <button type="button" onClick={async () => {
              const token = localStorage.getItem("token")
              try {
                const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                  amount: amount,
                  to: id
                }, { headers: { Authorization: `Bearer ${token}` } })
                alert("Transfer success!")
              } catch (err) {
                console.error("Error:", err);
                alert("An error occurred during the transfer.");
              }
            }} className='bg-green-500 text-white p-2 py-1 my-2 text-sm font-medium rounded-md'>Initiate Trasfer</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Send
