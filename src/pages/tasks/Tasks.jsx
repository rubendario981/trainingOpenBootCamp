import React from 'react'
import TaskListComponent from '../../components/container/task_list'

const Tasks = () => {
  return (
    <div>
        <h3 className="bg-primary text-white text-center p-3">The task list</h3>
        <TaskListComponent/>
    </div>
  )
}

export default Tasks