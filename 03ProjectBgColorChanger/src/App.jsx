import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <h1 className='block pt-10 text-center mx-auto' style={{color:"white", fontSize:"3rem"}}>Background Color Changer</h1>
        <div className='fixed flex justify-center flex-wrap bottom-20 inset-x-0 w-fit m-auto px-5 py-3 rounded-full' style={{backgroundColor:"wheat", color:"white"}}>

          <button onClick={() => setColor("red")} className='flex flex-wrap justify-center px-5 py-3 rounded-full mx-5 my-0' style={{backgroundColor:"red"}}>
            Red
          </button>

        

          <button onClick={() => setColor("green")} className='flex flex-wrap justify-center px-5 py-3 rounded-full mx-5 my-0' style={{backgroundColor:"green"}}>
            Green
          </button>
          
        

          <button onClick={() => setColor("yellow")} className='flex flex-wrap justify-center px-5 py-3 rounded-full mx-5 my-0' style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          
        

          <button onClick={() => setColor("magenta")} className='flex flex-wrap justify-center px-5 py-3 rounded-full mx-5 my-0' style={{backgroundColor:"magenta"}}>
          Magenta
          </button>
          
        

          <button onClick={() => setColor("cyan")} className='flex flex-wrap justify-center px-5 py-3 rounded-full mx-5 my-0' style={{backgroundColor:"cyan"}}>
          Cyan
          </button>
          
        

          <button onClick={() => setColor("orange")} className='flex flex-wrap justify-center px-5 py-3 rounded-full mx-5 my-0' style={{backgroundColor:"orange"}}>
          Orange
          </button>
          
        </div>
      </div>
    </>
  )
}

export default App
