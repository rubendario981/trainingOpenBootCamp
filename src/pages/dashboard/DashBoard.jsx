import React from 'react'
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/forms/CopyRight';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigateTo = useNavigate()

  const logout =()=>{
    localStorage.removeItem('credentials')
    navigateTo('/login')
  }
  const loadTask =()=>{
    navigateTo('/task')
  }
  return (
    <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center w-50 m-auto'>        
      <Button variant="contained" color='error' onClick={loadTask}>Load tasks</Button>
      <Button variant="contained" onClick={logout}>LogOut</Button>
      <CopyRight/>
    </div>
  )
}

export default DashBoard