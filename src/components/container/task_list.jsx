import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task'

const TaskListComponent =() => {
  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
  return (
    <div>
        <h2>
            Your Tasks are: 
        </h2>

        <TaskComponent task={defaultTask}></TaskComponent>

    </div>
  )
}

export default TaskListComponent
