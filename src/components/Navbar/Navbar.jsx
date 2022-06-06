import React, { useContext } from "react";
import{Link,useNavigate }from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink

const Navbar = () => {
  const navigate=useNavigate();
  const {isAuth,logout}=useContext(AuthContext);
  const onclickhandler=()=>{
    isAuth?logout():navigate('/')
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to= '/'>Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:{0}</span>
      <button data-cy="navbar-login-logout-button" onClick={onclickhandler}>{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
