import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useLocation,Navigate} from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const {isAuth}=useContext(AuthContext);
  const location=useLocation();
  console.log(location)
  if(isAuth){
    return children;
  }else{
return <Navigate to='/login'  replace></Navigate>
  }
};

export default RequiredAuth;
