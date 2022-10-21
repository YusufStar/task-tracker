import React from 'react'

function taskButton({setOpenTask}) {
  return (
      <button className='p-3 bg-green-800 rounded-lg' onClick={() => setOpenTask(true)}>Open</button>
  )
}

export default taskButton