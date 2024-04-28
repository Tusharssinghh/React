import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useState(20)

function App() {
  const [count, setCount] = useState(200)

  const addvalue = () => {
    console.log(count)
    setCount((prevcounter) => prevcounter + 1)    //setCount accepts callback function..
    setCount((prevcounter) => prevcounter + 1)
    setCount((prevcounter) => prevcounter + 1)
    setCount((prevcounter) => prevcounter + 1)
    setCount((prevcounter) => prevcounter + 1)
  }

  const decreasevalue = () => {
    setCount(count -1);
  }

  return (
    <>
      <h1>Hello buddy, Here i am starting React on the go</h1>
      <h2>Counter value : {count}</h2>
      <button onClick = {addvalue}>Increase counter value : {count}</button>
      <br/>
      <br/>

      <button onClick = {decreasevalue}>Decrease counter value : {count}</button>
    </>
  )
}

export default App
