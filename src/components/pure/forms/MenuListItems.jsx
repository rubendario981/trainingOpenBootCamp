import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { HomeIcon, Setting, Task } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const MenuListItems = () => {
    const getIcon = (icon) => {
        switch (icon) {
            case 'HOME':
                return (<HomeIcon />)
            case 'SETTING':
                return (<Setting />)
            case 'TASK':
                return (<Task />)

            default:
                return (<HomeIcon />)
                break;
        }
    }

    const MenuListItems = ({list})=>{
        const navigateTo = useNavigate()

        const navigate = (path)=>navigateTo(path)
    }
    return (
        <div>
            <List>
                {list.map(({text, patch, icon}, index)=>{
                    (
                        <ListItem key={index} button onClick={()=> navigate()}>
                            <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                            <ListItemText primary={text}></ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default MenuListItems