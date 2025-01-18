import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 30) {
        return prevCounter + 1
      }
      return prevCounter
    })
  }

  const removeValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1
      }
      return prevCounter
    })
  }
  return (
    <>
      <h1 style={{ fontSize: '72px', color: 'red' }}>Reactuddin Sheikhopuro</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
