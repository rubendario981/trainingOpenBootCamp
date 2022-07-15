import React from 'react'
import { useState } from 'react'

const loginForm = () => {
    const initialCredentials = {
        user: '',
        password: ''
    }
  const [userCredentials, setUserCredentials] = useState(initialCredentials)
  return (
    <div>loginForm</div>
  )
}

export default loginForm