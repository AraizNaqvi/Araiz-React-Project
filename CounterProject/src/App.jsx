import { useState } from 'react' // Will grab the hook for you
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;
  const addValue = () => {
    if(counter <20){
      setCounter(counter+1)
    }
    else console.log("Max Value Reached!");
    console.log(counter);
  }
  const decreaseValue = () => {
    if(counter>=1){
      setCounter(counter-1);
    }
    else console.log("Min Value Reached!");
    console.log(counter);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>+</button>
      <br />
      <button onClick={decreaseValue}>-</button>
    </>
  )
}

export default App
