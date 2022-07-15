import React from 'react'
import { useState } from 'react'

const GreetingStyled = (props) => {
    const loggedStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const unLoggedStyle = {
        color: 'red',
        fontWeight: 'bold'
    }
    const [logged, setLogged] = useState(false)
    const saludos = () => <h3>Hola {props.name}</h3>
    const loguearse = () => <p>Por favor loguearse</p>

  return (
    <div style={logged ? loggedStyle : unLoggedStyle }>
        { logged ? saludos() : loguearse()}
        
        <button onClick={()=>setLogged(!logged)}>{logged ? 'Salir': 'Ingresar'}</button>
    </div>
  )
}

export default GreetingStyled