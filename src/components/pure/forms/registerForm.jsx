import React from 'react'

const registerForm = () => {
  const initialData = {
    name: '',
    user: '',
    email: '',
    password: ''
  }
  const [userData, setUserData] = useState(initialData)
  return (
    <div>registerForm</div>
  )
}

export default registerForm