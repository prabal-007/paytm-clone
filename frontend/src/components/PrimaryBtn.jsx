import { Link } from 'react-router-dom'

const PrimaryBtn = ({label, to}) => {
  return (
    <div>
        <Link to={to} className='justify-center items-center flex'>
          <button className='bg-blue-500 text-white rounded-md px-2 py-2 text-sm'>{label}</button>
        </Link>
    </div>
  )
}

export default PrimaryBtn
