import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()

  const goBack = ()=> navigate(-1)

  const loadTaks =(path)=> navigate(path)

  return (
    <div>
        <h1 className="text-center text-white bg-primary">Home page</h1>
        <h3 className="text-center">Acces to you page</h3>
        <div className="d-flex justify-content-around">
          <button className="btn btn-success" onClick={()=> loadTaks('/task')}>Load Your task</button>
          <button className="btn btn-info" onClick={ goBack }>Go back</button>
        </div>
    </div>
  )
}

export default HomePage