import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, multiply, divide } from '../Store/counterSlice'
import "./index.css"

function CounterController() {
    const inp1 = useRef()
    const inp2 = useRef()
    const dispatch = useDispatch()
  return (
    <div>
        <input ref={inp1} type={"number"}/>
        <input ref={inp2} type={"number"}/>
        <br></br>
        <br></br>
        <button id='btn' onClick={()=>{dispatch(increment({ilk:inp1.current.value,inp2:inp2.current.value}))}}>+</button>
        <button id='btn' onClick={()=>{dispatch(decrement({ilk:inp1.current.value,inp2:inp2.current.value}))}}>-</button>
        <button id='btn' onClick={()=>{dispatch(multiply({ilk:inp1.current.value,inp2:inp2.current.value}))}}>*</button>
        <button id='btn' onClick={()=>{dispatch(divide({ilk:inp1.current.value,inp2:inp2.current.value}))}}>/</button>
    </div>
  )
}

export default CounterController