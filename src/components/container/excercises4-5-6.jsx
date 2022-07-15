import React, {useState, useEffect} from 'react'

const Clock = () => {
    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San jose'
    }
    const [dataUsuario, setDataUsuario] = useState(initialData)
    let timerID = 0 
    useEffect(() => { //equivalente a componentDidMount
        timerID = setInterval(() => {
            tick()
        }, 1000);    
    }, [])
    
    useEffect(() => { //equivalente a componentWillUmount

        return ()=>{
            clearInterval(timerID)
        }
    }, [])

    const tick = ()=>{
        let edad = dataUsuario.edad + 1
        setDataUsuario({...dataUsuario, edad, fecha: new Date()})
    }
      
  return (
    <div className='border border-primary p-5'>
        <h1>Desarrollo ejercicio 4 - 5 - 6 </h1>
        <h3>Hora actual {dataUsuario.fecha.toLocaleTimeString()} </h3>
        <h4>{dataUsuario.nombre + ' ' + dataUsuario.apellidos}</h4>
        <h4>Edad: {dataUsuario.edad}</h4> 
    </div>
  )
}

export default Clock