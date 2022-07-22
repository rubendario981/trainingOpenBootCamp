import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const CreateContact = ({ addUser }) => {

    const name = useRef('')
    const lastName = useRef('')
    const email = useRef('')

    const createContact = (e) => {
        e.preventDefault()
        const newUser = new Contact(name.current.value, lastName.current.value, email.current.value, false)
        addUser(newUser)
    }
    
    return (
        <div>
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Formulario creacion de contacto</h5>
                    <form onSubmit={createContact}>
                        <div className="form-floating mb-3">
                            <input ref={name} id='inputName' type="text" className="form-control" placeholder="Nombre" autoFocus />
                            <label htmlFor="floatingName">Nombres</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input ref={lastName} id='inputLastName' type="text" className="form-control" placeholder="Apellidos" />
                            <label htmlFor="floatingLastname">Apellidos</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input ref={email} id='inputEmail' type="email" className="form-control" placeholder="Ingresa tu correo" />
                            <label htmlFor="floatingEmail">Correo electronico</label>
                        </div>
                        <div className="d-flex justify-content-around mt-5">
                            <button className="btn btn-primary" type='submit'>Crear contacto</button>
                            <button className="btn btn-warning" type='reset'>Limpiar formulario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

CreateContact.propTypes = {
    addUser: PropTypes.func.isRequired
}

export default CreateContact