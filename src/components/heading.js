import React from "react";
import './heading.css'
import { Link  } from "react-router-dom";
import Logout from "./logout";
import a from '../icons/home.png';
import b from '../icons/summary.png';
import c from '../icons/profile.png';

export default function Heading()
{
    return <div className="heading"> 
   
        <Link to="/home"><img className="img" src={a} alt="" /></Link>
        <Link to="/summary"><img className="img" src={b} alt="" /></Link>
        <Link to="/profile"><img className="img" src={c} alt="" /></Link>
        <Logout />
        
        </div>
}