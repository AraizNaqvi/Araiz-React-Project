import { useState } from "react"

function App() {
  const [value, setValue] = useState(0);

  const increaseValue = function(){
    if(value<10) setValue(value+1)
    else console.log("Max Value Achieved...");
  }

  const decreaseValue = function(){
    if(value>0) setValue(value-1);
    else console.log("Min value achieved...");
  }

  return (
    <>
      <section className="w-full h-screen bg-black text-white flex justify-center items-center">
        <div className="text-black rounded-xl px-[5rem] py-[2.5rem] bg-white">
          <div>
            <h1 className="text-[2rem] font-extrabold">Counter Project</h1>
            <h4 className="text-[1.2rem] font-extrabold text-center">value: {value}</h4>
          </div>
          <div className="mt-5">
            <button onClick={increaseValue} className="border-[1px] border-black px-3 py-1 w-[120px] mx-3 hover:bg-black hover:text-white transition duration-400">Up</button>
            <button onClick={decreaseValue} className="border-[1px] border-black px-3 py-1 w-[120px] mx-3 hover:bg-black hover:text-white transition duration-400">Down</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
