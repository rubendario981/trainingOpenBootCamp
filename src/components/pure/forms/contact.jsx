import PropTypes from 'prop-types'
import { useState } from 'react'
import { Contact } from '../../../models/contact.class'

const ContactComponent =({contact, toggleStatus, deleteConctact})=> {
  const [status, setStatus] = useState(contact.status)
    
  return (
    <tr className='align-middle'>
        <th>{contact.name}</th>
        <th>{contact.lastName}</th>
        <th>{contact.email}</th>
        <th>
            {contact.status ? 
                <i className="bi-person-check-fill" style={{ fontWeigth: 'bold', color: 'green', fontSize: '36px' }}></i>:
                <i className="bi-person-x-fill" style={{ fontWeigth: 'bold', color: 'gray', fontSize: '36px' }}></i>
            }
        </th>
        <th>
            <button onClick={()=> toggleStatus(contact)}
                className={!contact.status ? 'btn btn-primary btn-sm': 'btn btn-danger btn-sm'}>
                {!contact.status ? 'Conectar' : 'Desconectar'}
            </button> 
        </th>
        <th>
            <i className="bi-trash" role='button' onClick={deleteConctact} style={{ fontWeigth: 'bold', color: 'tomato', fontSize: '28px' }}></i>
        </th>
    </tr>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    toggleStatus: PropTypes.func.isRequired,
    deleteConctact: PropTypes.func.isRequired
}

export default ContactComponent