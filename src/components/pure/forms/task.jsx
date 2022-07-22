import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'
import '../../../styles/tasks.scss'

const TaskComponent = ({ task, complete, deleteTask }) => {
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
      <th className='align-middle'>
        <span className='ms-2'>
          {task.name}
        </span>
      </th>
      <td className='align-middle'>
        <span>
          {task.description}
        </span>
      </td>
      <td className='align-middle'>
        <span>
          {taskLevelBadge()}
        </span>
      </td>
      <td>
        <span className='align-middle'>
          {task.completed ?
            <i onClick={()=> complete(task)} className='bi-toggle-off' role='button' style={{ fontWeigth: 'bold', color: 'gray', fontSize: '36px' }}></i> :
            <i onClick={()=> complete(task)} className='bi-toggle-on' role='button' style={{ fontWeigth: 'bold', color: 'green', fontSize: '36px' }}></i>}
        </span>
        <i onClick={()=> deleteTask(task)} className="bi-trash ms-5" role='button' style={{ fontWeigth: 'bold', color: 'red', fontSize: '32px' }}></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskComponent