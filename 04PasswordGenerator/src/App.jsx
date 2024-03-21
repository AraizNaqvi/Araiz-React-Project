import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [incNum, setIncNum] = useState(false);
  const [incChar, setIncChar] = useState(false);
  const [passkey, setPasskey] = useState("");

  const passkeySetting = useCallback(() => {
    let str = "";
    let all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(incNum) all+="0123456789";
    if(incChar) all+="!@#$%^&*()_+";

    for(let i=0; i<length; i++){
      let index = Math.floor(Math.random() * all.length);
      str += all.charAt(index);
    }
    
    setPasskey(str);
  }, [incChar, incNum, length]);

  const passRef = useRef(null);
  const copyToClip = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(passkey);
  }, [length, passkey]);

  useEffect(() => {
    passkeySetting();
  }, [passkeySetting]);

  return (
    <>
      <section className="bg-black text-white h-screen w-full flex justify-center items-center">
          <div className="border-[1px] border-white rounded-2xl px-[6rem] py-[3rem] bg-white flex justify-evenly items-center flex-col">
            <h1 className="text-black text-[2rem] mb-5 font-extrabold">Password Generator</h1>
            
            <div className="text-white border-white border-[1px] rounded-3xl bg-black outline-none">
              <input type="text" value={passkey} readOnly className="text-white border-transparent rounded-2xl bg-transparent text-[1.5rem] px-4 py-2 outline-none"/>
              <button onClick={copyToClip} className="border-[1px] border-transparent rounded-tr-3xl rounded-br-3xl bg-blue-700 text-white text-[1.5rem] px-4 py-2 outline-none">Copy</button>
            </div>

            <div className="flex items-center text-black mt-5">
              
              <div className="flex items-center mr-7">
                <input type="range" value={length} min={8} max={20} onChange={(e) => setLength(e.target.value)} id="rangeVal"/>
                <label htmlFor="rangeVal" className="ml-2">{length}</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" className="mr-1" defaultChecked={incNum} id="numCheck" onChange={() => {
                  setIncNum((prev) => !prev);
                }}/>
                <label htmlFor="numCheck" className="mr-2">Number</label>

                <input type="checkbox" className="mr-1" defaultChecked={incChar} id="charCheck" onChange={() => {
                  setIncChar((prev) => !prev);
                }}/>
                <label htmlFor="charCheck">Character</label>
              </div>

            </div>

          </div>
      </section>
    </>
  )
}

export default App
