import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'
import '../../../styles/tasks.scss'

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log('Task created')
    return () => {
      console.log(`Task: ${task.name}, is going to umount`)

    }
  }, [task])

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>
        )
      default:
        break;
    }
  }
  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>
          {task.name}
        </span>
      </th>
      <td>
        <span className='aling-middle'>{
          task.description}
        </span>
      </td>
      <td>
        <span className='aling-middle'>
          {taskLevelBadge()}
        </span>
      </td>
      <td>
        <span className='aling-middle'>
          {task.completed ?
            <i className='bi-check' style={{ fontWeigth: 'bold', color: 'green', fontSize: '32px' }}></i> :
            <i className='bi-x-circle-fill' style={{ fontWeigth: 'bold', color: 'red', fontSize: '32px' }}></i>}
        </span>
        <i className="bi-trash ms-5" style={{ fontWeigth: 'bold', color: 'red', fontSize: '32px' }}></i>
      </td>
    </tr>
    // <div>
    //     <h2 className='task-name'>Nombre: {task.name}</h2>
    //     <h3>Descripcion: {task.description}</h3>
    //     <h4>Nivel: {task.level}</h4>
    //     <h5>La tarea esta  {task.completed ? 'completada': 'incompleta'}</h5>
    // </div>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
}

export default TaskComponent