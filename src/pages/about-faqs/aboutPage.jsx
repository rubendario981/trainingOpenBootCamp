import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    console.log('We are in route: ' + location.pathname)

    const goHome = (path) => {
        navigate(path)
    }
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3 className="text-center text-white bg-primary">About page</h3>

            <div className="d-flex justify-content-around w-50 m-auto">
                <button className="btn btn-primary" onClick={() => goHome('/')}>Go home</button>
                <button className="btn btn-success" onClick={goBack}>Go back </button>
            </div>
        </div>
    )
}

export default AboutPage