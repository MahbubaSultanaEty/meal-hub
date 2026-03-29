import React from 'react';
import navPhoto from '../../assets/food-nav-photo.jpeg'

const Navbar = () => {
    return (
       <nav className='nav-container'>
        <div className='nav-left'>
          <img style={{height: "50px", borderRadius: "50%"}} src={navPhoto}></img>
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
    );
};

export default Navbar;