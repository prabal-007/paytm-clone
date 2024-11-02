
const SignBtn = ({ label, onClick }) => {
  return <button onClick={onClick} type="button" className='bg-black text-white my-2 rounded-md px-2 py-2 text-sm'>{label}</button>
}

export default SignBtn
