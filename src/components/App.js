import React from "react";
import './../styles/App.css';
let logins=document.getElementById("login");
const login=(logins)=>{
  if(logins==true){
    let p=document.createElement("p");
    p.textContent=`You are Logged in!`;
  }
}

export default App
