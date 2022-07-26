import { Formik, Field, Form, ErrorMessage } from 'formik'
import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
              .email('Invalid email format')
              .required('Email is required'),
  password: Yup.string()
                .required('password is required')
})
const LoginForm = () => {
  const initialCredentials = {
    email: '',
    password: ''
  }
  const [userCredentials, setUserCredentials] = useState(initialCredentials)
  return (
    <div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem('credentials', JSON.stringify(values))
        }}
      >
        {({values, touched, errors, isSubmitting, handleChange, handleBlur})=>(
            <Form className='d-flex flex-column w-50 m-auto mt-5 border border-primary p-5'>
            {/* <label className='form-label' htmlFor="firstName">First Name</label>
            <Field className='form-control' id="firstName" name="firstName" placeholder="Jane" />

            <label className='form-label' htmlFor="lastName">Last Name</label>
            <Field className='form-control' id="lastName" name="lastName" placeholder="Doe" /> */}

            <label className='form-label' htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className='form-control'
            />

            { errors.email && touched.email && (
                <ErrorMessage name='email'/>
            )}

            <label htmlFor="password">Password</label>
            <Field id='password' name='password' className='form-control' type='password'/>
            { errors.email && touched.password && (
              <ErrorMessage name='password'/>
            )}
            <div className="d-flex justify-content-around mt-5">
              {isSubmitting ? <p>Submitting form </p>:
              <div>
                <button className='btn btn-primary' type="submit">Submit</button>
                <button className='btn btn-warning' type="reset">Reset form</button>
              </div>                
              }
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default LoginForm