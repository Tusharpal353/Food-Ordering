import "./Header.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
const Header = () => {
  const [BtnName, setBtnName] = useState("login")
  return (

    <div className="navbar">

      <div className="logoContainer">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1698662329~exp=1698662929~hmac=781a955b9b8b178528124e0987986e8929c29174dd334b58fd1db4930c91620d"
          alt="logo"
        />
      </div>
      <div className="navbar-items">
        <ul className="navbar-menu">

          <Link ><li>Home</li></Link>
          <Link to={<Aboutus />}><li>About us </li></Link>
          <Link to={<Contact />}><li>Contact us</li></Link>
          <li>cart</li>
          <button className="login" onClick={() => {
            BtnName === "login"
              ? setBtnName("Logout") : setBtnName("login")

          }}>{BtnName}</button>
        </ul>
      </div>
    </div>


    /*   <div>
        <div className='navbar'>
          <img src={assets.logo} alt="" />
          <ul className='navbar-menu'>
            <li onClick={() => setMenu("home")}
              className={menu === "Home" ? "active" : ""}>Home</li>
            <li onClick={() => setMenu("Menu")}
              className={menu === "Menu" ? "active" : ""}>Menu</li>
            <li onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}>Contact</li>
            <li onClick={() => setMenu("About")}
              className={menu === "About" ? "active" : ""}>About</li>
          </ul>
          <div className="navbar-right">
            <div className='basket-icon'>
  
              <LocalMallIcon className='basket-icon' />
              <div className='dot'>
  
  
              </div>
            </div>
            <button>Sign in</button>
          </div>
        </div>
      </div>
   */
  );
};

export default Header;

