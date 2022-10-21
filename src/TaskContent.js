import React from 'react'
import {ImBin2} from "react-icons/im"

function TaskContent({task,handleSubmit,SetTaskDate,SetTaskInput,setOpenTask,deleteData}) {
  return (
    <div className='w-[900px] relative flex flex-col items-center h-[600px] bg-transparent'>
      <h1 className='mt-5 text-4xl font-bold text-green-700'>Task Tracker</h1>
      <button onClick={() => setOpenTask(false)} className='absolute cursor-pointer text-green-800 font-bold text-2xl right-[15px] top-[10px]'>X</button>
      <form onSubmit={(e) => handleSubmit(e)} className='w-[100%] h-[50%] mt-5 flex items-center flex-col gap-5'>
        <input onChange={(e) => SetTaskInput(e.target.value)} className='w-[75%] h-[30px] rounded-lg text-white font-medium bg-green-800 text-center' type="text" required/>
        <input onChange={(e) => {SetTaskDate(new Date(e.target.value).toDateString()); console.log(new Date(e.target.value).toDateString());}} className='w-[25%] h-[30px] rounded-lg text-white font-medium bg-green-800 text-center' type="date" required/>
        <button className='text-xl p-3 rounded-lg hover:scale-90 transition-all duration-300 font-bold bg-green-700 text-white' type='submit'>Add New Task</button>
      </form>
      <div className="w-[80%] h-[90%] mb-5 mt-5 rounded-lg flex items-center flex-col overflow-y-scroll gap-5">
        {task.map((mytask, i) => (
          <div key={i} className='w-[90%] h-[35px] flex flex-row justify-between items-center bg-green-800 rounded-lg p-1'>
            <div className="w-[300px] h-[100%] flex flex-row items-center justify-center">
            <h1 className='text-md text-white'>{mytask?.taskinput}</h1>
            </div>
            <div className="w-[300px] h-[100%] flex flex-row items-center justify-center">
            <h1 className='text-md text-white'>{mytask?.taskdate}</h1>
            </div>
            <div className="w-[300px] h-[100%] flex flex-row items-center justify-center">
              <ImBin2 size={25} className="text-red-800 cursor-pointer" onClick={() => deleteData(mytask?.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskContent