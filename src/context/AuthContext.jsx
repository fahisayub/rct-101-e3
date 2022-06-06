import React, { createContext } from "react";
import { useState } from "react";
import {Navigate,useNavigate} from "react-router-dom";
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuth,setAuth]=useState(false);
 // const {state}=useLocation();
  const navigate=useNavigate();
  let login =()=>{
    setAuth(true);
    navigate('/');
   // <Navigate to='/' state={state.from} replace/>

  }
  let logout=()=>{
    setAuth(false);
    <Navigate to='/login'  replace/>
  }

  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
