import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 20

  let [counter, setCounter] = useState(20)

  const addvalue = () => {
    console.log("value increases", counter)
    counter++;
    setCounter(counter)
  }

  const removevalue = () => {
    setCounter(counter - 1)
  }
  return (
    <>

      <h1>Here i am start development</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addvalue}>Increase counter value{counter}</button>
      <br/>
      <button onClick = {removevalue}>Decrease counter value{counter}</button>
    </>
  )
}

export default App
