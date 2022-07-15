import React, {useState, useContext} from 'react'

const miContexto = React.createContext()

const estadoInicial = {
  token: 123456789,
  sesion: 1
}

const ComponentePadre =()=> {
  const [sesionData, setSesionData] = useState(estadoInicial)
  const actualizarSesion = ()=>{
    setSesionData({
        token: Math.ceil(Math.random() * 100000000),
        sesion: Math.round(sesionData.token / 1000000)
    })
  }
  return (
    <div> Info padre
        <miContexto.Provider value={sesionData}>
            <PrimerHijo/>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
            <button onClick={()=>setSesionData(estadoInicial)}>Restart sesion</button>
        </miContexto.Provider>
    </div>
  )
}

const PrimerHijo =()=> {
  const state = useContext(miContexto)
  return (
      <div> primer hijo
        <h2>El token es: {state.token}</h2>
        <SegundoHijo name='Tito el gatito'/>
    </div>
  )
}

const SegundoHijo =(props)=> {
const state = useContext(miContexto)
  return (
    <div> segundo hijo
        <h2>La sesion es {state.sesion}</h2>
        <p>Ademas la propiedad de nombre es {props.name}</p>
    </div>
  )
}

export default ComponentePadre
