import React, { useState, useEffect } from "react"
import "./App.scss"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: " FETCH_HOTELS_REQUEST" })
  }, [])
  return (
    <div className="App">
      <h1>Redux Hooks</h1>
      <hr />
      {counter}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  )
}

export default App
