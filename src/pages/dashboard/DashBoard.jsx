import React from 'react'
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/forms/CopyRight';
import { useNavigate } from 'react-router-dom';
import ObservableExample from '../../components/pure/forms/ObservableExample';
import FetchExample from '../../components/pure/forms/FetchExample';
import JokesChuck from '../../components/container/JokesChuck';

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
    <div className='d-flex flex-column justify-content-center m-auto'>
      <JokesChuck/>     
      <FetchExample/>
      <ObservableExample/>
        <h2 className="bg-primary text-white text-center mt-5">Cargar tareas o salida segura</h2>
      <div className="d-flex justify-content-around">
        <Button variant="contained" color='error' onClick={loadTask}>Load tasks</Button>
        <Button variant="contained" onClick={logout}>LogOut</Button>

      </div>
      <CopyRight/>
    </div>
  )
}

export default DashBoard