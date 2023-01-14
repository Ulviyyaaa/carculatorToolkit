import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value)
  return (
    <h1>Cavab : { count }</h1>
  )
}

export default Counter