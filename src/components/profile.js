import React, { useContext, useEffect, useRef } from "react";
import './profile.css';
import Heading from "./heading";
//import './home.css';
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { Balance } from "./context";
import Password from "./password";


export default function Profile()
{
    //var [fix,setfix]=useState(0)
    var {balance,setbalance}=useContext(Balance)
   

    var profile_ref=useRef({balance:0})

    const currentDate = new Date();
    const day = currentDate.getDate();
    const formattedDate = `${day < 10 ? '0' : ''}${day}`;

    
    useEffect(()=>{
        if (localStorage.getItem('logged')!=='1') {
          navigate("/WalletReport")
        }
    
      },[])
    

    var navigate =useNavigate()
    // function clear()
    // {
    //     localStorage.clear();
    //     alert("localStorage has been cleared.");
    //     navigate('/')
    // }
    function acknowledge()
    {
        if(profile_ref.current.balance <= 0)
        {
            alert("The value can't be Zero")
            var a =document.getElementById('total');
            a.value="";
        
        }
        else if(profile_ref.current.balance > 100000)
        {
            alert("The limit is only 1 lakh")
            var a =document.getElementById('total');
            a.value="";
        
        }
        else
        {
        setbalance(profile_ref.current.balance)
        //localStorage.setItem('main_balance',profile_ref.current.balance)
        var b = document.getElementById('total');
        b.value="";
        alert("Amount has been updated")
        navigate('/WalletReport/home')
        }
       
    }
    //console.log(formattedDate)

    if(localStorage.getItem('logged')==='1') 
    {
    
    if(formattedDate==='01' || formattedDate==='22')
    {
        

    return <div className="profile_main">
       <Heading /> 

       <div className="login">

    <section className="home2" > 
    <div className="input">
    
    <h1>Enter your amount here</h1>

    <input type="number" placeholder="Enter your amount" id="total" className="input1" onChange={x=>{profile_ref.current={...profile_ref.current,balance:x.target.value}}}></input>

    <button onClick={acknowledge} className="btn">Acknowledge</button> 

    </div>

    
   
    </section> 
    </div>
    <h6 className="info">You can enter the amount only by 1st and 3rd of every month</h6>
    {/* <div className="clear_info"><button className="clear_info_btn" onClick={clear}>Clear Records</button>
    
    </div> <h6 className="info"> Clearing record will delete all your datas permantely</h6> */}

    <Footer />

    </div>
    }

   else if(balance===null)
    {
        

    return <div className="profile_main">
       <Heading /> 

       <div className="login">

    <section className="home2" > 
    <div className="input">
    
    <h1>Enter your amount here</h1>

    <input placeholder="Enter your amount" id="total" type="number" className="input1" onChange={x=>{profile_ref.current={...profile_ref.current,balance:x.target.value}}}></input>

    <button onClick={acknowledge} className="btn">Acknowledge</button> 

    </div>

    
   
    </section> 
    </div>
    <h6 className="info">You can enter the amount only by 1st and 3rd of every month</h6>
    {/* <div className="clear_info"><button className="clear_info_btn" onClick={clear}>Clear Records</button>
    
    </div> <h6 className="info"> Clearing record will delete all your datas permantely</h6> */}

    <Footer />

    </div>
    }

   
    else
    {
        return <div className="profile_main">
       <Heading /> 

       <div className="login">

    <section className="home2" > 
    <div className="input">
    
    <h1>Enter your amount here</h1>

    <input disabled placeholder="Enter your amount" id="total" type="number" className="input1" onChange={x=>{profile_ref.current={...profile_ref.current,balance:x.target.value}}}></input>

    <button disabled onClick={acknowledge} className="btn">Acknowledge</button> 

    

    </div>

    
   
    </section> 
    </div>
    <h6 className="info">You can enter the amount only by 1st and 3rd of every month</h6>
    {/* <div className="clear_info"><button className="clear_info_btn" onClick={clear}>Clear Records</button>
    
    </div> <h6 className="info"> Clearing record will delete all your datas permantely</h6> */}
    <Footer />


    </div>
    }
   
}


}