import React, { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import './home.css';
import './login.css';



export default function Login()
{
   
    var ref=useRef({name:'',password:''})
    var navigate=useNavigate()
    var dt=[]

    useEffect(() => {
      
        
        if(localStorage.getItem('name'))
        {
            // console.log(localStorage.getItem('name'))
            // console.log(localStorage.getItem('password'))
            // navigate('/home')
            navigate('/password')
        }
      });

    function submit()
    {
        if((ref.current.name==="" && ref.current.password==="") ||(ref.current.name==="" && ref.current.password!=="") || (ref.current.name!=="" && ref.current.password==="") )
        {
            alert("Please enter details to login")
        }

        else
        {
         localStorage.setItem('name',ref.current.name)
         localStorage.setItem('password',ref.current.password)
         if(localStorage.getItem('user')===null)
         {
         localStorage.setItem('user',JSON.stringify(dt))
         }
         navigate('/home')
         localStorage.setItem('logged',1)
        }
    }
    
    return <div className="login_main">
                    <h1 className="login_heading">Expense Report</h1>

    <div className="login">
        <section className="login2">
            <div className="login_input">
                
                <input placeholder="enter your name" type="text" id="name" className="login_input1" onChange={props=>{ref.current={...ref.current,name:props.target.value}}}></input>

                <input placeholder="enter your password" type="password" className="login_input1" id="password" onChange={props=>{ref.current={...ref.current,password:props.target.value}}}></input>

                <button type="submit" onClick={submit} id="login_btn" className="login_btn">Submit</button>

            </div>
        </section>
    </div>

    </div>
}