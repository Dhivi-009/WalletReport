import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login";
import Profile from "./components/profile";
import Summary from "./components/summary";
import Home from "./components/home";
import { Balance } from "./components/context";
import Password from "./components/password";

export default function Routing() {

  var [balance,setbalance]=useState(localStorage.getItem('balance'))
  
    return (
      <Router >
        <Balance.Provider value={{balance,setbalance}}>
        <Routes>  
        
        <Route path="/WalletReport" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/WalletReport/home" element={<Home />} />
        <Route path="/WalletReport/profile" element={<Profile  />} />
        <Route path="/WalletReport/summary" element={<Summary  />} />
        <Route path="/WalletReport/password" element={<Password  />} />
        
        </Routes>
        </Balance.Provider>
      </Router>
    );
  }