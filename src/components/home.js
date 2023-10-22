import React, { useContext, useRef } from "react";
import Heading from "./heading";
import './home.css';
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { Balance } from "./context";
import { useEffect } from "react";


export default function Home()
{
  var {balance,setbalance}=useContext(Balance)
 
  var home_ref=useRef({Item:"",Amount:0})
  var navigate=useNavigate()


  useEffect(()=>{
    localStorage.setItem('balance',balance)

  },[balance])

  useEffect(()=>{
    if (localStorage.getItem('logged')!=='1') {
      navigate("/WalletReport")
    }

  },[])

  //navigate("/")

async function spent()
{
  if(balance===0 || balance===null)
  {
    alert("enter amt")
    navigate('/WalletReport/profile')
}

else
{
  if(home_ref.current.Item!=="" && home_ref.current.Amount!=="" && home_ref.current.Amount!==0 && home_ref.current.Amount!=='0' && home_ref.current.Amount>0 && home_ref.current.Amount>'0')
  {
  var data=JSON.parse(localStorage.getItem('user'))
  //console.log(data)
  const obj = {Item: home_ref.current.Item , Amount: home_ref.current.Amount}
  data.push(obj)
  localStorage.setItem('user',JSON.stringify(data))
  setbalance(balance-home_ref.current.Amount)
  //console.log(localStorage.getItem('user'))
  
  home_ref.current.Item=""
  home_ref.current.Amount=""
  var i =document.getElementById('what');
  i.value="";
 
  var a =document.getElementById('how');
  a.value="";

  alert("data has been saved")
  
  
  }
  else
  {
    alert("Please check the values")
    var j =document.getElementById('what');
    j.value="";
 
    var b =document.getElementById('how');
    b.value="";
  }
  
}
  
  
}

    //console.log(localStorage.getItem('logged'))

    if(localStorage.getItem('logged')==='1')
    {

    return <div> 

      <Heading/> 

      <section className="balance">   
         <div className="home1">
          
            <div className="home11">
            <h1 >Avl balance :  {balance} </h1>
            </div>
            <div className="home12"> <h1 >Welcome {localStorage.getItem('name')}! </h1>   </div>
         </div>
      </section>

      <div className="login">
      <section className="home2">
        <div className="input">

        <input type="text" placeholder="Item" className="input1" id="what" onChange={x=>{home_ref.current={...home_ref.current,Item:x.target.value}}}></input>

        <input type="number" placeholder="Amount" className="input1" id="how" onChange={x=>{home_ref.current={...home_ref.current,Amount:x.target.value}}}></input>

        <button className="btn" onClick={spent}>Spent</button>

        </div>


      </section>
      </div>

      <Footer />

      
    
    </div>
    }

   
    
}