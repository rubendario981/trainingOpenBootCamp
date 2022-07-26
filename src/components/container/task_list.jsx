import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
  const defaultTask2 = new Task('Lavar ropa', 'Poner la ropa en la lavadora', true, LEVELS.URGENT)
  const defaultTask3 = new Task('Hacer la cama', 'Doblar las mantas y cobijas', false, LEVELS.NORMAL)
  const defaultTask4 = new Task('Lavarse los dientes', 'Usar hilo dental, cepillo y enjuague bucal', true, LEVELS.BLOCKING)
  const defaultTask5 = new Task('Lavar los platos', 'Lavar toda la losa, secarla y ponerla en su lugar', false, LEVELS.URGENT)

  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3, defaultTask4, defaultTask5])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Task state has been modified')
    setLoading(false)
    return () => {
      console.log('TaskList component is going to umount')
    }
  }, [tasks])

  const completeTask = (task) => {
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks)
  }

  const deleteTask = (task) => {
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.splice(index, 1)
    setTasks(tempTasks)
  }

  const addTask = (task) => {
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }

  const NoTasks = ()=>{
    return(
    <div>
      <img src="https://www.collinsdictionary.com/images/full/mojavedesert_169024493_1000.jpg" alt="There are not results" className='card-img' />
      <div className="card-img-overlay p-5">
        <h2 className='bg-primary text-white p-3 mt-5 fw-bold'>Tu lista de tareas esta vacia </h2>
        <h5 className="m-5 bg-info p-3 text-primary">Puedes crear tu lista de tareas</h5>
      </div>
    </div>

    )
  }

  const HeaderTaskList = ()=>{
    return(
      <div className="card-header">
        <h5 className="card-title">Your Tasks are: </h5>
      </div>
      )
  }

  return (
    <div className='d-flex justify-content-center mt-5 align-items-center'>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
      <div className="card flex-grow-1 m-auto ms-5">
        {tasks.length > 0 ?
          <HeaderTaskList/>:
          <NoTasks/>
        }
        <div className="card-body p-0" data-mbd-perfect-scrollbar='true'>
          {tasks.length > 0 ?
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
                {tasks.map((task, index) => {
                  return (
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
            </table> : <p></p>
          }
        </div>
      </div>

    </div>
  )
}

export default TaskListComponent
