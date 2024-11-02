
const InputFields = ({placeholder, type, onChange}) => {
  return <input type={`${type}`} placeholder={`${placeholder}`} required onChange={onChange} className='border border-gray-400 py-1 px-2 text-sm rounded-md'/>
}

export default InputFields
