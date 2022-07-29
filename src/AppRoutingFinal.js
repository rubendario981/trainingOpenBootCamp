import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, Link, NavLink } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/aboutPage'
import ProfilePage from './pages/profile/ProfilePage'
import TaskListComponent from './pages/tasks/Tasks'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import RegisterForm from './components/pure/forms/registerForm'
import LoginForm from './components/pure/forms/loginForm'
import DashBoard from './pages/dashboard/DashBoard'

const AppRoutingFinal = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(() => {
        let user = localStorage.getItem('credentials')
        setLoggedIn(user)
    }, [loggedIn])

    const exit = () => {
        localStorage.removeItem('credentials')
        setLoggedIn(false)
    }

    return (
        <Router>
            <div className='container'>
                <nav className='d-flex justify-content-around w-100 m-auto bg-info text-white'>
                    <NavLink className={(navData) => navData.isActive ? 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-primary' : 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-success'} to='/'>Home</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-primary' : 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-success'} to='/about'>About</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-primary' : 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-success'} to='/faqs'>FAQs</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-primary' : 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-success'} to='/login'>Login</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-primary' : 'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-success'} to='/profile'>Profile</NavLink>
                    {loggedIn &&
                        <button className={'text-decoration-none text-white border border-white px-3 py-2 my-2 bg-success'} onClick={exit}>Exit </button>
                    }
                </nav>

                <main>
                    <Routes>
                        <Route exact path='/' element={loggedIn ? 
                                <DashBoard/>:
                                <LoginForm />
                            }>                            
                        </Route>
                        <Route path='/dashboard' element={<DashBoard/>}/>
                        <Route path='/login' element={<LoginForm/>}/>
                        <Route path='/register' element={<RegisterForm/>}/>
                        
                        <Route path='/profile' element={loggedIn && <ProfilePage />} />
                        {['about', 'faqs'].map((path, i) => <Route path={path} key={i} element={<AboutPage />} />)}
                        <Route path='/task' element={loggedIn ? <TaskListComponent /> : <RegisterForm />} />
                        {/* <Route path='/task/:id' element={logged ? <TaskDetailPage /> : <RegisterForm />} /> */}

                        <Route path='/*' element={<NotFoundPage />} />
                    </Routes>

                </main>
            </div>
        </Router>
    )
}
export default AppRoutingFinal