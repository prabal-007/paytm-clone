import React from 'react'

const InputFields = ({placeholder, type}) => {
  return (
    <>
    <input type={`${type}`} placeholder={`${placeholder}`} className='border border-gray-400 py-1 px-2 text-sm rounded-md'/> 
    </>
  )
}

export default InputFields
