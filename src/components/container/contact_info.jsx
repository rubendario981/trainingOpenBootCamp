import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/forms/contact'
import CreateContact from '../pure/forms/createContact'

const ContactListComponent = () => {

  const contact1 = new Contact('Ruben Dario', 'Guzman Gonzalez', 'rubendario981@gmail.com', false)
  const contact2 = new Contact('Scarleth', 'Jhohansson', 'blackwidow@avenger.com', true)
  const contact3 = new Contact('Gal', 'Gadot', 'wonderwoman@dccomics.com', true)

  const [contacts, setContacts] = useState([contact1, contact2, contact3])

  const changeStatus = (contact) => {
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts[index].status = !tempContacts[index].status
    setContacts(tempContacts)
  }

  const deleteConctact = (contact) => {
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.splice(index, 1)
    setContacts(tempContacts)
  }

  const createContact = (newContact) => {
    const tempContacts = [...contacts]
    tempContacts.push(newContact)
    setContacts(tempContacts)
  }

  return (
    <div className="d-flex flex-column justify-content-between">
      <div className='card w-75 m-auto mb-5'>
        <div className="card-header">
          {contacts.length == 0 ?
            <h3 className='card-title'>Tu lista de contactos esta vacia</h3> :
            <h3 className='card-title'>Tu lista de contactos tiene {contacts.length > 1 ? contacts.length + ' contactos' : contacts.length == 1 && ' 1 contacto'}</h3>
          }
        </div>
        <div className="card-body p-0">
          <table className='table table-primary table-striped table-hover table-bordered '>
            <thead className='text-primary fs-5 align-middle'>
              <tr>
                <td scope='col'>Nombres</td>
                <td scope='col'>Apellidos</td>
                <td scope='col'>Correo electronico</td>
                <td scope='col'>Estado</td>
                <td scope='col'>Cambiar estado</td>
                <td scope='col'>Eliminar </td>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {contacts.map((user, index) => {
                return (
                  <ContactComponent
                    key={index}
                    contact={user}
                    toggleStatus={changeStatus}
                    deleteConctact={deleteConctact}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-50 m-auto">
        <CreateContact 
          addUser={createContact}
        />
      </div>
    </div>
  )
}

export default ContactListComponent