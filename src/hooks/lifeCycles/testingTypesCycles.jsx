import React, { Component } from 'react'
import { useEffect } from 'react'

export class CycleDidMount extends Component {
  componentDidMount(){
    console.log('Behaviour before component been added to DOM class component')
  }
  render() {
    return (
      <div>
        <h3>testingTypesCycles class component</h3>
      </div>
    )
  }
}

export const CycleDidMountAF =()=> {
    useEffect(()=>{
        console.log('Behaviour before component been added to DOM Arrow function component')
    },[])
  return (
    <div>
        <h3>TestingTypesCycles Arrow funtion component</h3>
    </div>
  )
}

export class CycleDidUpdate extends Component {
    componentDidUpdate(){
        console.log('Se ejecuta cuando las props son cambiados o recibe nuevos')
    }
  render() {
    return (
      <div>component did update class component</div>
    )
  }
}

export const CycleDidUpdateAF = () => {
    useEffect(()=>{
        console.log('Se ejecuta cuando las props son cambiados o recibe nuevos')
    })
  return (
    <div>
        <h3>CycleDidUpdateAF</h3>
    </div>
  )
}

export default class CycleWillUmount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento cuando se va a desmontar class component')
    }
  render() {
    return (
      <div> ciclo de vida will umount class component</div>
    )
  }
}

export const CycleWillUmountAF = () => {
    useEffect(()=>{
        // todo se hace es despues del return 
        return ()=>{
            console.log('Comportamiento cuando se va a desmontar arrow function')
        }
    }, [])
  return (
    <div> ciclo de vida will umount af</div>
  )
}

