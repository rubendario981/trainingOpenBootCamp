import PropTypes from 'prop-types'
import { Task } from '../../../models/task.class'

const TaskComponent = ({task})=> {
  return (
    <div>
        <h2>Nombre: {task.name}</h2>
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