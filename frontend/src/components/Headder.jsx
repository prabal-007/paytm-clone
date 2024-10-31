
const Headder = ({label, desc}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white gap-2'>
      <h1 className='font-bold text-2xl'>{label}</h1>
      <p className='text-gray-700 text-sm text-wrap text-center'>{desc}</p>
    </div>
  )
}

export default Headder
