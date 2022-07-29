import React, { useState, useEffect } from 'react'
import { getAllUsers, getNumberPages, getAllUsersPage } from '../../services/FetchService';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const FetchExample = () => {
    const [users, setUsers] = useState([])
    const [numberPages, setNumberPages] = useState(0)
    useEffect(() => {
        getUsers()
        getNumberOfPages()
    }, [])

    const getNumberOfPages = () => {
        getNumberPages()
            .then((res) => setNumberPages(res.total_pages))
            .catch((error) => console.log(`Error on getNumber pages ${error}`))
    }
    const getUsers = () => {
        getAllUsers()
            .then((res) => {
                setUsers(res.data)
            })
            .catch((error) => console.log(`Error al obtener lista usuarios ${error}`))
            .finally(() => {
                console.log('End request list users' + users)
            })
        }
        const getAllUsersPerPage = (page)=>{
            getAllUsersPage(page)
            .then((res)=> setUsers(res.data))
            .catch((error) => console.log(`Error al paginadas lista usuarios ${error}`))
    }

    return (
        <div>
            <h2 className="bg-primary text-white text-center">Listado de usuarios</h2>
            <div className='d-flex justify-content-around'>
                {/* TODO SHOW EACH USER IN A CARD AND PAGINATE RESULTS */}
                {users.map((user, index) => {
                    return (
                        <Card className='m-2' key={index} sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {user.first_name.slice(0,1)}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={user.first_name}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={user.avatar}
                                alt={user}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <span className='fs-4'>Nombres: <span className='fs-6'>{user.first_name}</span> </span> <br />
                                    <span className='fs-4'>Apellidos: <span className='fs-6'>{user.last_name}</span> </span> <br />
                                    <span className='fs-4'>Correo electronico: <span className='fs-6'>{user.email}</span></span> 
                                </Typography>
                            </CardContent>                            
                        </Card>
                    )
                })}
            </div>
            
            {[...Array(numberPages).fill('Pagina')].map((btn, index)=>(
                <button key={index} className="btn btn-secondary btn-sm ms-2" onClick={()=> getAllUsersPerPage(index + 1) }> {btn + ' ' + (index + 1) }  </button>
            ))}
        </div>
    )
}

export default FetchExample