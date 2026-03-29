
import Home from './Home'
import "./App.css"
import navPhoto from './assets/food-nav-photo.jpeg'

function App() {
  

  return (
    <>
      <nav className='nav-container'>
        <div className='nav-left'>
          <img style={{height: "8vw"}} src={navPhoto}></img>
          <h2>Tasty Bites</h2>
        </div>
        <div>
          <ul className='nav-right'>
            <li>Home</li>
            <li>Orders</li>
             <li>BLogs</li>
            <li>Contacts</li>
          </ul>
        </div>
         </nav>
    </>
  )
}

export default App
