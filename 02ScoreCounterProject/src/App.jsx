import { useState } from 'react'

function App() {
  let [value, setValue] = useState(0);
  const inc = () => {
    if(value>19) console.log("Max Value...");
    else setValue(value+1);
  }
  const dec = () => {
    if(value<1) console.log("Min Value...");
    else setValue(value-1);
  }

  return (
    <>
      <div className='flex items-center justify-center h-screen '>
        <section className='p-10 w-[500px] bg-[#a31419] rounded-xl'>
            <h1 className='text-white text-3xl text-center mb-1 font-extrabold'>Score Counter</h1>
            <h1 className='text-white text-3xl text-center mb-5 font-extrabold'>Value: &apos;<span className='text-black'>{value}</span>&apos;</h1>
            <div className='flex align-middle justify-between'>
              <button className='border-black bg-white rounded-xl px-6 py-1 text-lg font- hover:bg-black hover:text-white transition-all duration-200' onClick={inc}>PUSH</button>
              <button className='border-black bg-white rounded-xl px-6 py-1 text-lg font- hover:bg-black hover:text-white transition-all duration-200' onClick={dec}>POP</button>
            </div>
        </section>
      </div>
    </>
  )
}

export default App
