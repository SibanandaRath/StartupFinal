import React from 'react';
import "./Navbar.css";

const Navbar = () =>{
    return(<>
         <nav className='main-nav'>
             <div className='logo'><span className='start'>START</span><span className='up'>UP</span></div>
             <div className='menuLink'>
                 <ul className='menu'>
                     <li className='homeMenu'>
                         <a href = "#">HOME</a>
                     </li>
                     <li>
                         <a href = "#">ABOUT US</a>
                     </li>
                     <li>
                         <a href = "#">SUBMIT AN IDEA</a>
                     </li>
                     </ul>
             </div>
             <div className='loginButton'>
                 <ul>
                     <li className='loginMenu'>
                         <a href='#'>Login</a>
                     </li>
                     <li className='registerMenu'>
                         <a href='#'>Register</a>
                     </li>
                 </ul>
             </div>
         </nav>
    </>)
}

export default Navbar;