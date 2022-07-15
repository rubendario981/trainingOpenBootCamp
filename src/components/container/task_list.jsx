import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task'

const TaskListComponent =() => {
  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
  
  const [tasks, setTasks] = useState([defaultTask])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    console.log('Task state has been modified')
    setLoading(false)
    return ()=>{
      console.log('TaskList component is going to umount')

    }
  }, [tasks])
  const changeCompleted =(id)=>{
    setTasks()
  }
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
