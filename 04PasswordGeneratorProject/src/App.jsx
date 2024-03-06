import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  let [pass, setPass] = useState("");
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [specialCharAllowed, setspecialCharAllowed] = useState(false);

  const passRef = useRef(null);


  const passWordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if(numberAllowed) str+= "0123456789";
    if(specialCharAllowed) str+="!@#$%^&*()_+-=[]{}:;?/>.<,";

    for(let i=0; i<length; i++){
      let index = Math.floor(Math.random()*str.length);
      let ch = str.charAt(index);
      pass+=ch;
    }

    setPass(pass);
  }, [length, numberAllowed, specialCharAllowed]);

  const copyToClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(pass);
  }, [length, pass]);

  useEffect(() => {
    passWordGenerator();
  }, [length, numberAllowed, specialCharAllowed, passWordGenerator]);

  return (
    <>
      <section className='flex items-center justify-center w-screen h-screen bg-black'>
        <div className='border-white border-2 rounded-2xl p-10'>
          <h1 className='text-white text-[3rem] font-extrabold'>Password Generator</h1>
          <hr className='relative bottom-2 border-t-4'/>

          <div className='mt-5 border-2 border-gray-400 w-fit rounded-xl mx-auto'>
            <input className='text-white bg-transparent border-transparent rounded-l-xl outline-none px-3 py-1 text-xl' type="text" readOnly value={pass}/>
            <button className='bg-white text-xl text-black px-3 py-1 rounded-r-xl' onClick={copyToClip}>Copy</button>
          </div>

          <div className='border-2 border-none bg-white mt-10 rounded-xl p-6 flex items-center'>
              <div className='flex items-center mr-20'>
                <input type="range" id='rangeSelector' value={length} min={8} max={20} onChange={(e) => {
                  setLength(e.target.value);
                }}/>
                <label htmlFor="rangeSelector" className='text-black text-xl ml-2'>{length}</label>
              </div>

              <div className='flex items-center text-black text-xl'>
                <div className='mr-5'>
                  <input type="checkbox" id='numberCheck' defaultChecked={numberAllowed} onChange={() => {
                    setNumberAllowed((prevNumValue) => !prevNumValue);
                  }}/>
                  <label htmlFor="numberCheck"> Numbers</label>
                </div>

                  <div>
                    <input type="checkbox" id='specialCheck' defaultChecked={specialCharAllowed} onChange={() => {
                      setspecialCharAllowed((prevCharValue) => !prevCharValue);
                    }}/>
                    <label htmlFor="specialCheck"> Special Characters</label>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
