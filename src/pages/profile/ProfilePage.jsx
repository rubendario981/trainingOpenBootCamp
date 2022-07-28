import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProfilePage = () => {
    const navigate = useNavigate()
    const goBack =()=>{
        navigate(-1)
    }
  return (
    <div>
        <h3 className="text-center text-white bg-primary">Your profile</h3>
        <div className="d-flex justify-content-around">
          <button className="btn-primary" onClick={goBack}>Go back</button>

        </div>
    </div>
  )
}

export default ProfilePage 