import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Tushar",
    age: 25
  }
  let newarr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-900 text-black p-4 rounded-xl mb-4' >Checking if Tailwind CSS work</h1>
      {/* <Card channel = "hello tushar" newobj = {myobj} myarr = {newarr}/> */}
      <Card username = "Tushar_singh" btnText = "Click me"/>
      <Card username = "Chota rahul" btnText= "click kr"/>
    </>
  )
}

export default App
