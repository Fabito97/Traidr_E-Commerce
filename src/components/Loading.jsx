import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

const Loading = () => {
  return (
    <div className='flex-center h-screen bg-primary' style={{position:"absolute", top:"0", left:'0', width: "100vw", zIndex:'1000'}}>
      <div className='flex-column justify-between align-center'>
        <h1>traidr</h1>
        
        <div className='border p-1 text-dark  flex-center bg-secondary border-radius mt-3' style={{ gap:'8px'}}>
          <FaSpinner size={20} className='animate-spin'/>
          <span>IN PROGRESS</span>
        </div>
      </div>
    </div>
  )
}

export default Loading