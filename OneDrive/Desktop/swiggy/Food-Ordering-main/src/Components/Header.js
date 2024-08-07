import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [BtnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (                                                            //sm used for media query code if device sive is greater than sm then this will happen
    <div className="flex justify-between bg-pink-500 shadow-lg mb-2 sm:bg-yellow-50">
      <div className="logoContainer">
        <img
          className="w-24"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1698662329~exp=1698662929~hmac=781a955b9b8b178528124e0987986e8929c29174dd334b58fd1db4930c91620d"
          alt="logo"
        />
      </div>
      <div className="navbar-items flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            Online status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3">cart</li>
          <button
            className="login"
            onClick={() => {
              BtnName === "login" ? setBtnName("Logout") : setBtnName("login");
            }}
          >
            {BtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

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
