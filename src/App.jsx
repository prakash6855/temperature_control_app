import { useState } from 'react'
import './App.css'

function App() {
  const [temp, setTemp] = useState(0);

  const addTemp = () => {
    setTemp(temp + 1);
    changeColor("#f3bc77");
  }

  const reduceTemp = () => {
    setTemp(temp - 1);
    changeColor("#00bbf0");
  }

  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="w-full h-screen">
        <button onClick={addTemp} style={{ backgroundColor: "orangered" }}>UP</button>
        <button onClick={reduceTemp} style={{ backgroundColor: "blue" }}>DOWN</button>
        <p>Current temperature: {temp}</p>
      </div>
    </>
  )
}

export default App
