import React, { useState } from 'react'
import Tasklist from './Tasklist'

const TodoCard = () => {
  const [activity, setactivity] = useState("")
  const [task, settask] = useState([])

  const handleupdate = ()=>{
    settask([...task, activity])
    setactivity('')
  }
  return (
    <>
      <div className='flex items-center justify-center mt-40'>
        <input type="text" className='bg-pink-400' onChange={(e)=>setactivity(e.target.value)} value={activity} />
        <button onClick={handleupdate}>Add task</button>
      </div>
      <div className='flex items-center justify-center'>
        <Tasklist task={task} settask={settask}/>
      </div>
    </>
  )
}

export default TodoCard
