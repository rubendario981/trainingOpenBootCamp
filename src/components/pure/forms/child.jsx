import React, {useRef} from 'react'

const Child = ({ send, sendMesageToFather }) => {

    const mensajeRef = useRef('Referencia default')

    const pressButton = (btn) => {
        const text = mensajeRef.current.value
        console.log(`Este mensaje ref ${text}`)
        console.log(mensajeRef)
    }

    const pressButtonParams = (param) => {
        console.log('se ha clickeado el boton 3' + param)

    }

    let msg = 'mi tito'

    return (
        <div>
            <p className='bg-primary py-3' onMouseOver={() => console.log('Habeis pasado por el parrafo')}>child component</p>
            <button className='btn btn-primary btn-sm me-3' onClick={() => console.log('has dado click boton 1')}>Boton Auto exe</button>
            <button className='btn btn-warning btn-sm me-3' onClick={pressButton}>Boton pressButton</button>
            <button className='btn btn-info btn-sm me-3' onClick={() => pressButtonParams('hola la la')}>Boton parametrizado</button>
            <input type="text" placeholder='escribge algo'
                onChange={(e) => console.log('Se ha cambiado' + e.target.value)}
                onCopy={() => console.log('se ha copiado el txt')}
                onFocus={() => console.log('te habeis enfocado en el input')}
                ref={mensajeRef}
                name="" id="" />
            <button className='btn btn-dark me-3' onClick={() => sendMesageToFather(msg, mensajeRef)}>send message to father</button>
        </div>
    )
}

export default Child