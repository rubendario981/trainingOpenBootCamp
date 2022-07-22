import React, {useState} from 'react'
import Child from '../pure/forms/child'
import TaskForm from '../pure/forms/taskForm'

const Father = () => {
    const showMessage =(msg, )=>{
        alert(`El mensaje de mi hijo es: ${msg}`)
    }
    const [msjHijo, setMsjHijo] = useState('Soy el mensaje original')
    const [mensaje, setMensaje] = useState('mensajito ref default')
    const showMessage2 =(mensajeDesdeHijo, mensajeRefDesdeHijo)=>{
      setMsjHijo(mensajeDesdeHijo)
      setMensaje(mensajeRefDesdeHijo.current.value)
      console.log(`Soy el father y este es el mensaje ref que me manda mi hijo ${mensajeRefDesdeHijo.current.value}`)
    }
  return (
    <div className='container-fluid bg-primary p-5 my-5 border border-success border-5'>
      <h3 className="text-white mb-5">Soy el componente padre</h3>
      <div className="d-flex justify-content-evenly">
        <div className="border border-white border-5 me-5">
          <h4 className="text-info">Esta es la informacion que manda el hijo </h4>
          <p> {msjHijo}</p>
          <p> {mensaje}</p>
        </div>
        <div className="bg-white border border-success border-5 ms-5">
          <h4 className="text-info bg-sucess">Tengo el componente hijo</h4>
          <Child send={showMessage} sendMesageToFather={showMessage2}></Child>
        </div>
      </div>
      <TaskForm></TaskForm>
    </div>
  )
}

export default Father