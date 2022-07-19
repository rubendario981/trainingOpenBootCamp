import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task'

const TaskListComponent =() => {
  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
  const defaultTask2 = new Task('Example2', 'Default Description2', true, LEVELS.URGENT)
  const defaultTask3 = new Task('Example2', 'Default Description', false, LEVELS.NORMAL)
  const defaultTask4 = new Task('Example4', 'Default Description', true, LEVELS.BLOCKING)
  const defaultTask5 = new Task('Example', 'Default Description', false, LEVELS.URGENT)
  
  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3, defaultTask4,defaultTask5])
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
    <div className='col-12'>
      <div className="card">
        <div className="card-header p3">
          <h5 className="card-title">Your Tasks are: </h5>
        </div>
        <div className="card-body" data-mbd-perfect-scrollbar='true' style={{position: 'relative', heigth: '400px'}}>
          <table>
            <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Priority</th>
              <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
              {tasks.map((task, index)=>{
                return(
                  <TaskComponent key={index} task={task}></TaskComponent>

                )
              })}
            </tbody>
          </table>
        </div>
      </div>
        <h2>

        </h2>


    </div>
  )
}

export default TaskListComponent
