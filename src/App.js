import axios from "axios";
import { useEffect, useState } from "react";
import TaskContent from "./TaskContent";
import TaskButton from "./TaskButton"

function App() {
  const [openTask, setOpenTask] = useState(false)
  const [taskinput, SetTaskInput] = useState("")
  const [taskdate, SetTaskDate] = useState("")
  const [task, setTask] = useState([])
  const url = "https://63528d78a9f3f34c3740fbfb.mockapi.io/data"
  
  const GetData = async () => {
    const {data} = await axios(url)
    setTask(data)
    console.log(data);
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
      const newTask = {taskinput,taskdate}
      console.log("task geldi mi:", newTask);
      AddTask(newTask)
  }

  const AddTask = async (newTask) => {
    const {data} = await axios.post(url,newTask)
    GetData()
  }

  const deleteData = async id => {
    const response = await axios.delete(`${url}/${id}`)
    GetData()
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[900px] h-[600px] bg-gray-800 flex items-center justify-center rounded-lg">
        {openTask ? <TaskContent deleteData={deleteData} SetTaskInput={SetTaskInput} SetTaskDate={SetTaskDate} setOpenTask={setOpenTask} task={task} handleSubmit={handleSubmit}/>:<TaskButton setOpenTask={setOpenTask}/>}
      </div>
    </div>
  );
}

export default App;
