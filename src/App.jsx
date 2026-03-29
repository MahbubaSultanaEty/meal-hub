
import Home from './Home'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import FoodSection from './Components/FoodSection/FoodSection'
import { Suspense } from 'react'

const foodDataPromise= fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res=> res.json())

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading ......</div>}>
        <FoodSection foodDataRes={foodDataPromise}></FoodSection>
    </Suspense>

    </>
  )
}

export default App
