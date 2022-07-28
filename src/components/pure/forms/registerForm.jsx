import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ROLES } from '../../../models/roles.enum'
import User from '../../../models/user.class'
import * as Yup from 'yup'

const RegisterForm = () => {
  let defaultUser = new User('Ruben', 'rubendario981@gmail.com', '123456', ROLES.USER)
  let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    rol: ROLES.USER
  }

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Username is too short')
      .max(12, 'Username is too long')
      .required(),
    email: Yup.string()
      .email('Invalid email format ')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password is too short')
      .required('Password is required'),
    confirm: Yup.string()
      .when('password', {
        is: value => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          '¡Password must match!!!'
        )
      })
      .required('You should confirm the password')
  })
  return (
    <div>
      <div>
        <h3 className="bg-primary text-white text-center p-3">Registro usuario</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000))
            alert(JSON.stringify(values, null, 20))
          }}
        >

          {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
            <div>
              <h3 className="bg-primary text-white text-center w-50 m-auto p-2">Ingresa tus datos</h3>
              <Form className='d-flex flex-column w-50 m-auto border border-primary px-5 pb-5'>
                <label className='form-label mt-3' htmlFor="username">Username</label>
                <Field
                  id="username"
                  name="username"
                  placeholder="jane@acme.com"
                  type="text"
                  className='form-control'
                />

                {errors.email && touched.email && (
                  <div className="text-danger">
                    <ErrorMessage name='username' />
                  </div>
                )}

                <label className='form-label mt-3' htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="yourmail@acme.com" type="email" className='form-control' />

                {errors.email && touched.email && (
                  <div className="text-danger">
                    <ErrorMessage name='email' />
                  </div>
                )}

                <label className='from-label mt-3' htmlFor="password">Password</label>
                <Field id='password' name='password' className='form-control' type='password' />
                {errors.password && touched.password && (
                  <div className="text-danger">
                    <ErrorMessage name='password' />
                  </div>
                )}

                <label className='from-label mt-3' htmlFor="confirm">Confirmar password</label>
                <Field id='confirm' name='confirm' className='form-control' type='password' />
                {errors.confirm && touched.confirm && (
                  <div className="text-danger">
                    <ErrorMessage name='confirm' />
                  </div>
                )}
                <div>
                  {isSubmitting ? <p className="bg-primary text-white text-center">Submitting form </p> :
                    <div className="d-flex justify-content-around mt-5">
                      <button className='btn btn-primary' type="submit">Submit</button>
                      <button className='btn btn-warning' type="reset">Reset form</button>
                    </div>
                  }
                </div>
              </Form>
            </div>
          )}

        </Formik>
      </div>
    </div>
  )
}

export default RegisterForm