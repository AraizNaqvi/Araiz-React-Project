import { useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState("black");

  return (

    <>
      <section className="w-full h-screen text-white" style={{backgroundColor: bgColor}}>
        <h1 className="text-[4rem] font-extrabold text-center relative top-20">Background Color Changer</h1>

        <div className="absolute inset-x-0 bottom-20 w-[80%] border-2 border-white mx-auto px-10 py-5 rounded-full bg-white text-black">
          <ul className="flex justify-evenly items-center mx-auto">
            <li className=" font-extrabold rounded-xl w-fit text-center text-[1.3rem] px-8 py-2 bg-red-600 cursor-pointer border-2 border-transparent  hover:border-black transition-all duration-500" onClick={() => setBgColor("red")}>Red</li>
            <li className=" font-extrabold rounded-xl w-fit text-center text-[1.3rem] px-8 py-2 bg-green-600 cursor-pointer border-2 border-transparent  hover:border-black transition-all duration-500" onClick={() => setBgColor("green")}>Green</li>
            <li className=" font-extrabold rounded-xl w-fit text-center text-[1.3rem] px-8 py-2 bg-blue-600 cursor-pointer border-2 border-transparent  hover:border-black transition-all duration-500" onClick={() => setBgColor("blue")}>Blue</li>
            <li className=" font-extrabold rounded-xl w-fit text-center text-[1.3rem] px-8 py-2 bg-cyan-600 cursor-pointer border-2 border-transparent  hover:border-black transition-all duration-500" onClick={() => setBgColor("cyan")}>Cyan</li>
            <li className=" font-extrabold rounded-xl w-fit text-center text-[1.3rem] px-8 py-2 bg-purple-600 cursor-pointer border-2 border-transparent  hover:border-black transition-all duration-500" onClick={() => setBgColor("purple")}>Purple</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
