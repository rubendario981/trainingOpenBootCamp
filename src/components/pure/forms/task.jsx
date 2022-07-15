import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Task } from '../../../models/task.class'
import '../../../styles/tasks.scss'

const TaskComponent = ({task})=> {
  useEffect(()=>{
    console.log('Task created')
    return ()=>{
      console.log(`Task: ${task.name}, is going to umount`)

    }
  }, [task])
  return (
    <div>
        <h2 className='task-name'>Nombre: {task.name}</h2>
        <h3>Descripcion: {task.description}</h3>
        <h4>Nivel: {task.level}</h4>
        <h5>La tarea esta  {task.completed ? 'completada': 'incompleta'}</h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent