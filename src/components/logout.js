import React from "react";
import { useNavigate , Link  } from "react-router-dom";
import a from '../icons/logout.png';
export default function Logout()
{
    var navigate=useNavigate()
    function logout()
    {
    //localStorage.removeItem('name')
    //localStorage.removeItem('password')
    localStorage.setItem('logged',0)
    //console.log(localStorage.getItem('logged'))
    navigate('/WalletReport')
    }
    return <Link to="/WalletReport" onClick={logout}><img className="img" src={a} alt="" /></Link>

    // <button onClick={logout}><img className="img" src={a} /></button>
}





