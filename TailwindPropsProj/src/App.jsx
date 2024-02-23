import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Araiz',
    age: 20
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Form username="araiznaqvi" btnText="Visit"/>
    </>
  )
}

export default App
