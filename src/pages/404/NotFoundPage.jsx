import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const goHome = (path)=>navigate(path)

  return (
    <div>
        <h3 className="text-center text-white bg-primary">404 - page not found</h3>
        
        <div className="d-flex justify-content-around">
          <button className="btn btn-success" onClick={()=> goHome('/')}>Go Home</button>

        </div>
    </div>
  )
}

export default NotFoundPage 