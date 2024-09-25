import React from 'react'

const Tasklist = ({task, settask}) => {

  const handleRemove = (i)=>{
    
    const filteritem = task.filter((item, id)=>(
      i != id

      ))
      settask(filteritem)
  }
  return (
    <div>
      <ul>
      {
        task.map((tasklist,i)=>(
        <li key={i}>{tasklist} <button onClick={()=>handleRemove(i)} className='border-2'>Delete</button> </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Tasklist
