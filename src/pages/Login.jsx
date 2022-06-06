import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {login}=useContext(AuthContext);
  const [email,setEmail]=useState('');
  const onclickhandler=()=>{
    login();
  }
  const onchangehandler=(e)=>{
    setEmail(e.target.value);
    console.log(email);
  }
  return (
    <div>
      <input data-cy="login-email" type='email' placeholder="email" onChange={onchangehandler}/>
      <input data-cy="login-password" type='password' placeholder='password' />
      <button data-cy="login-submit" type="submit" onClick={onclickhandler}>Login</button>
    </div>
  );
};

export default Login;
