import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailPage = ({task}) => {

    const {id} = useParams()
  return (
    <div>
        <h3 className="bg-primary text-white text-center p-3">Detalle tarea {id}</h3>
        <p>{task.name}</p>
        
    </div>
  )
}

export default TaskDetailPage