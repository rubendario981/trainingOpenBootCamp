import PropTypes from 'prop-types'
import { useState } from 'react'
import { Contact } from '../../../models/contact.class'

const ContactComponent =({contact})=> {
    const [status, setStatus] = useState(contact.status)

    const changeStatus = ()=>{
        if(status){
            setStatus(false)
        }
        if(!status){
            setStatus(true)
        }
    }
    
  return (
    <div>
        <h2>Informacion del contacto</h2>
        <h3>Nombres: {contact.name}</h3>
        <h3>Apellidos: {contact.lastName}</h3>
        <h3>Correo electronico: {contact.email}</h3>
        <h3>El usuario <strong> {status ? 'Esta conectado': 'No esta disponible'}</strong></h3>
        <button onClick={changeStatus}>{status ? 'Desconectar': 'Conectar'}</button>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent