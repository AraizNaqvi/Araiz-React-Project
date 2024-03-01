import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passkeyValue, setPasskeyValue] = useState("")

  const passRef = useRef(null)

  const passWordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+~[]<>/"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPasskeyValue(pass);

  }, [length, numAllowed, charAllowed, setPasskeyValue])

  const copyPassToClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(passkeyValue);
  }, [passkeyValue])

  useEffect(() => {
    passWordGenerator();
  }, [length, numAllowed, charAllowed, passWordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-5 py-5 my-8 text-orange-500 bg-gray-700'>
      
      <h1 className='text-4xl text-center mb-5' style={{color:"white"}}>Password Generator</h1>

        <div className='flex shadow-sm rounded-xl overflow-hidden'>
          <input type="text" value={passkeyValue} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
          <button onClick={copyPassToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 mt-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={20} className='cursor-pointer' onChange={(e) => {
              setLength(e.target.value)
            }} value={length}/>
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numInput' onChange={() => {
              setNumAllowed((prevNumValue) => !prevNumValue)
            }}/>
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {
              setCharAllowed((prevCharValue) => !prevCharValue)
            }}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
