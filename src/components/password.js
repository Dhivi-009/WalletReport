import React, { useRef } from "react";
import './password.css';
import { useNavigate } from "react-router-dom";
export default function Password()
{

    var ref=useRef({password:''})
    var navigate=useNavigate()

    function submit()
    {
        
        if(localStorage.getItem('password')===ref.current.password)
        {
            navigate('/home')
            localStorage.setItem('logged',1)
            ref.current.password=""
            var i =document.getElementById('password');
            i.value="";
 
        }
        else
        {
            ref.current.password=""
            alert("wrong password")
            var j =document.getElementById('password');
            j.value="";
 
        }
    }
    
    
    return <div>
       
        <h1 className="password_heading">WELCOME {localStorage.getItem('name').toUpperCase()}  </h1> 
         
        <div className="password_main">
        
          <section className="password_sub">
            
      
          <div className="password_input">

        <input placeholder="enter your password"  type="password" className="password_input1" id="password" onChange={props=>{ref.current={...ref.current,password:props.target.value}}}></input>

        <button type="submit" onClick={submit}  id="login_btn" className="password_btn">Submit</button>


    </div>
    </section>
</div>
</div>

}