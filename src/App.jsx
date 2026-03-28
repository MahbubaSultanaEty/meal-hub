import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  
  const [num, setNum]= useState(0)
 console.log(num, setNum)
  const  changeNumber =() => {
    const newNum = num + 1;
    return setNum(newNum)
  }

  return (
    <>
      <h1>{num}</h1>
      <Home num={num}></Home>
      <button onClick={changeNumber}>change number</button>
    </>
  )
}

export default App
