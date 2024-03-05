import { useState } from 'react'

function App() {
  let [color, setColor] = useState("white");

  return (
    <>
      <section className='h-screen w-screen bg-black'>
        <h1 className='text-[4rem] text-white font-semibold text-center relative top-[300px]' style={{color:color}}>Background Color Changer</h1>
        <div className='absolute bottom-20 m-auto'>
          <ul className='flex items-center justify-between'>
            <li className='px-6 py-0.5 text-[1.5rem] font-semibold mx-10 bg-red-700 rounded-xl cursor-pointer text-white' onClick={() => setColor("red")}>Red</li>
            <li className='px-6 py-0.5 text-[1.5rem] font-semibold mx-10 bg-yellow-500 rounded-xl cursor-pointer text-white'  onClick={() => setColor("yellow")}>Yellow</li>
            <li className='px-6 py-0.5 text-[1.5rem] font-semibold mx-10 bg-green-900 rounded-xl cursor-pointer text-white' onClick={() => setColor("green")}>Green</li>
            <li className='px-6 py-0.5 text-[1.5rem] font-semibold mx-10 bg-cyan-500 rounded-xl cursor-pointer text-white' onClick={() => setColor("cyan")}>Cyan</li>
            <li className='px-6 py-0.5 text-[1.5rem] font-semibold mx-10 bg-orange-500 rounded-xl cursor-pointer text-white' onClick={() => setColor("orange")}>Orange</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
