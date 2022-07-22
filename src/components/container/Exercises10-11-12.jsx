import React, {useState} from 'react'

const Exercises10To12 = () => {

  const [rgb, setRgb] = useState([0,0,0])
  const [timer, setTimer] = useState(0)
  const myStyle ={
    width: '255px',
    height: '255px',
    backgroundColor: `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`,
    marginTop: '120px'
  }

  const changeColor = ()=>{
    let minRgb = 0
    let maxRgb = 255
    setTimer(setInterval(() => {
      setRgb([Math.floor(Math.random() * (maxRgb - minRgb + 1)),Math.floor(Math.random() * (maxRgb - minRgb + 1)),Math.floor(Math.random() * (maxRgb - minRgb + 1))])
    }, 1000))
    setRgb([10,200,40])
  }
  
  const stopChangeColor = ()=>{
    clearInterval(timer)
  }
  return (
    <div className='container'>
        <h3 className='bg-primary text-white my-5 py-3'>Desarrollo ejercicios 10 - 11 - 12</h3>
        <div className="m-auto mt-5 border border-primary border-5" 
          onMouseOver={changeColor}
          onMouseOut={stopChangeColor}
          onDoubleClick={stopChangeColor}
          style={myStyle}>
        </div>
    </div>
  )
}

export default Exercises10To12