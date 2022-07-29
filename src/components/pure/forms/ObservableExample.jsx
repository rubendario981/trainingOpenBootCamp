import React, { useState } from 'react'
import { getNumber } from '../../services/ObservableService'

const ObservableExample = () => {
    const [number, setNumber] = useState(0)

    const obtainNumbers = ()=>{
        console.log('Iniciando suscripcion al obs')
        getNumber.subscribe({
            next(n){
                console.log(`El nuevo numero es -- ${n}`)
                setNumber(n)
            },
            error(error){
                console.log(`El error es -- ${error}`)
                
            },
            complete(){
                console.log(`Se ha finalizado con ${number}`)
                
            }
        })
        console.log('Ha finalizado la suscripcion al obs')
    }
  return (
    <div className='my-3'>
        <h2 className="bg-primary text-white text-center">Observable exercise</h2>
        <h5 className="text-center">Numer is {number}</h5>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={obtainNumbers}>Obtain new number</button>
        </div>
    </div>
  )
}

export default ObservableExample