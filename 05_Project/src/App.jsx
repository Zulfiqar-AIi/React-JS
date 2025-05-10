import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-xl px-8 py-6 my-16 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center text-3xl font-bold mb-6'>Password Generator</h1>
      
      <div className="flex shadow-lg rounded-lg overflow-hidden mb-6">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-xl bg-white text-gray-800"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 text-lg font-medium shrink-0 transition-colors'
        >
          Copy
        </button>
      </div>
      
      <div className='flex flex-col gap-6 text-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4 w-full'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer w-full'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='whitespace-nowrap'>Length: {length}</label>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="w-5 h-5"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>
          
          <div className="flex items-center gap-2">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  className="w-5 h-5"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App