import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task'
import TaskForm from '../pure/forms/taskForm'

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

  const completeTask =(task)=>{
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks)
  }

  const deleteTask = (task) =>{
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.splice(index, 1) 

    setTasks(tempTasks)

  }

  const addTask = (task)=>{
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }
  return (
    <div className='d-flex flex-column justify-content-center mt-5'>
      <TaskForm add={addTask}></TaskForm>
      <div className="card w-75">
        <div className="card-header">
          <h5 className="card-title">Your Tasks are: </h5>
        </div>
        <div className="card-body p-0" data-mbd-perfect-scrollbar='true'>
          <table className='table table-primary table-striped table-hover table-bordered'>
            <thead className='text-primary fs-5'>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Priority</th>
              <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody className='table-group-divider'>
              {tasks.map((task, index)=>{
                return(
                  <TaskComponent 
                    key={index} 
                    task={task}
                    complete={completeTask}
                    deleteTask={deleteTask}
                    >
                  </TaskComponent>

                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default TaskListComponent
