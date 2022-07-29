import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('password is required')
})
const LoginForm = () => {
  const navigateTo = useNavigate()
  const initialCredentials = {
    email: '',
    password: ''
  }
  const goToRegister =()=> navigateTo('/register')
  
  return (
    <div>
      <h3 className="bg-primary text-white text-center p-3">Iniciar sesion</h3>
      
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          await localStorage.setItem('credentials', JSON.stringify(values))
          await navigateTo('/dashboard')
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
          <div>
            <h3 className="bg-primary text-white text-center w-50 m-auto p-2">Ingresa tus datos</h3>
          <Form className='d-flex flex-column w-50 m-auto border border-primary p-5'>            
            <label className='form-label' htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className='form-control'
            />

            {errors.email && touched.email && (
              <div className="text-danger">
                <ErrorMessage name='email' />
              </div>
            )}

            <label className='form-label mt-3' htmlFor="password">Password</label>
            <Field id='password' name='password' className='form-control' type='password' />
            {errors.password && touched.password && (
              <div className="text-danger">
                <ErrorMessage name='password' />
              </div>
            )}
            <div>
              {isSubmitting ? <h6 className="bg-primary text-white text-center w-50 m-auto p-2">Submitting form </h6> :
                <div className="d-flex justify-content-around mt-5">
                  <button className='btn btn-primary' type="submit">Iniciar sesion</button>
                  <button className='btn btn-warning' type="reset">Borrar campos</button>
                </div>
              }
            </div>
            <div className='d-flex flex-column mt-3 justify-content-center'>
              <h6 className="text-center w-50 m-auto p-2">No estas registrado??</h6>
              <button className="btn btn-success" onClick={goToRegister}>Registrate aqui!!!</button>
            </div>
          </Form>
          </div>
        )}
      </Formik>

    </div>
  )
}

export default LoginForm