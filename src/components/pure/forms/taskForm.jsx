import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'

const TaskForm = ({add, length}) => {

  const name = useRef('')
  const description = useRef('')
  const level = useRef(LEVELS.NORMAL)

  const addTask = (e) => {
    e.preventDefault(e)
    const newTask = new Task(name.current.value, description.current.value, false, level.current.value)
    add(newTask)
  }
  return (
    <div className='p-4 border-primary bg-info'>
      <h3 className="bg-primary text-white py-2 mb-4">Formulario para creacion de tareas</h3>
      <form onSubmit={addTask} className='d-flex flex-column justify-content-center'>
        <div className="form-outline flex-fill">
          <div className="form-floating mb-3">
            <input ref={name} id='inputName' type="text" className="form-control" placeholder="Titulo tarea" autoFocus />
            <label htmlFor="floatingInput">Titulo tarea</label>
          </div>
          <div className="form-floating mb-3">
            <input ref={description} id='inputDescription' type="text" className="form-control" placeholder="Descripcion tarea" />
            <label htmlFor="floatingPassword">Descripcion</label>
          </div>
          <div className="form-floating mb-3">
            <select className='form-select' ref={level} id="selectLevel" defaultValue={LEVELS.NORMAL}>
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgente</option>
              <option value={LEVELS.BLOCKING}>Bloqueado</option>
            </select>
            <label htmlFor="selectLeve">Prioridad</label>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button className='btn btn-success' type='submit' >{length > 0 ? 'Crear Tarea' : 'Crear primera tarea'}</button>
          <button className='btn btn-warning' type='reset' >Limpiar formulario</button>
        </div>
      </form>
    </div>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm