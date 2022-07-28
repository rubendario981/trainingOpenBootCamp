import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import User from '../../../models/user.class'

const TaskForm = ({ add, length }) => {

  const name = '' // useRef('')
  const description ='' //  useRef('')
  const level = '' // useRef('')
  const completed ='' //  useRef(false)

  const taskData = {
    title: 'Mi primera tarea',
    description: 'vamos a crear una tarea',
    completed: false,
    level: ''
  }

  const taskSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, 'Title must be longer')
      .max(36, 'Not so long'),
    description: Yup.string()
      .min(12, 'Descriptions must be longer than 12 characters'),
    level: Yup.string()
  })

  // const addTask = (e) => {
  //   e.preventDefault(e)
  //   const newTask = new Task(name.current.value, description.current.value, completed.current.value, level.current.value)
  //   add(newTask)
  // }

  return (
    <div className='p-3 border-primary bg-info'>
      <h3 className="bg-primary text-white py-2 mb-4">Formulario para creacion de tareas</h3>
      <Formik
        initialValues={taskData}
        validationSchema={taskSchema}        
        onSubmit={async (values) => {
          await new Promise((r) => {
            setTimeout(r, 1000)
            const newTask = new Task(values.title, values.description, values.completed, values.level)
            add(newTask)
          })
        }}
      >

        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form className='d-flex flex-column '>
            <div className="form-floating mb-4">
              <Field
                id='title'
                name='title'
                type='text'
                className='form-control'
              >
              </Field>
              <label htmlFor="titleTask" className="form-label">Titulo de la tarea</label>
              {errors.title && touched.title && (
                <div className="text-danger">
                  <ErrorMessage name='title' />
                </div>
              )}
            </div>

            <div className="form-floating mb-4">
              <Field
                id='description'
                name='description'
                type='text'
                as='textarea'
                rows='5'
                className='form-control h-25'
              >
              </Field>
              <label htmlFor="descriptionTask" className="form-label">Descripcion de la tarea</label>
              {errors.description && touched.description && (
                <div className="text-danger">
                  <ErrorMessage name='description' />
                </div>
              )}
            </div>

            <div className="form-floating mb-4">
              <Field as='select' className='form-select' id="selectLevel" name='level' defaultValue=''>
                <option value='' disabled hidden>Selecione una opcion</option>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgente</option>
                <option value={LEVELS.BLOCKING}>Bloqueado</option>
              </Field>
              <label htmlFor="selectLevel">Prioridad</label>
            </div>

            <div className="form-check mb-4 text-start">
              <Field
                id='completed'
                name='completed'
                type='checkbox'
                className='form-check-input'
              />
              <label htmlFor="completed" className="form-check-label ms-2">{values.completed ? 'Crear como tarea completa' : 'Crear como tarea pendiente'}</label>
            </div>

            <div className="d-flex justify-content-around">
              {isSubmitting ? <h3>Enviando formulario</h3> :
                <div>
                  <button className='btn btn-success' type='submit' >{length > 0 ? 'Crear Tarea' : 'Crear primera tarea'}</button>
                  <button className='btn btn-warning' type='reset' >Limpiar formulario</button>
                </div>
              }
            </div>

          </Form>
        )}
      </Formik>

    </div>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm