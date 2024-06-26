import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'>
            {/* css loader generator */}
        </div>
        <p className='text-gray-900 text-lg font-semibold '>Loading....</p>
    </div>
  )
}

export default Spinner