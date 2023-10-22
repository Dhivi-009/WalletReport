import React, { useEffect } from "react";
import Heading from "./heading";
import './summary.css';
import { useContext } from "react";
import { Balance } from "./context";
import html2pdf from 'html2pdf.js';
import { useNavigate } from "react-router-dom";

export default function Summary()
{   

    var navigate=useNavigate()
    
    //console.log(data)
    var {balance,setbalance}=useContext(Balance)
    var sum=0;
    var data=JSON.parse(localStorage.getItem('user'))
    //console.log(data)

    useEffect(()=>{
        if (localStorage.getItem('logged')!=='1') {
          navigate("/WalletReport")
        }
    
      },[])
    
    function x(props)
    {
        var price=parseInt(props.Amount)
        sum=sum+price
        
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
  const year = currentDate.getFullYear();

  // Create a formatted date string in "YYYY-MM-DD" format
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


        //localStorage.setItem('spent_amount',sum)
        return <tr>
                   <td> {formattedDate}  </td>

                   <td> {props.Item} </td>
               
                   <td> {props.Amount} </td>
                   
                </tr>
    }

    const handleDownload = () => {
                const element = document.getElementById('pdf-content'); 
            
                html2pdf()
                .from(element)
                .save('wallet_details.pdf');
              };

              if(localStorage.getItem('logged')==='1'){
    return <div className="summary"> 
    <div className="summary_head"><Heading /> </div>

   
    <section className="summary_table" id="pdf-content">
    <table className="table">
            <th>
                Date
            </th>

            <th>
                Item
            </th>
            <th>
                Amount
            </th>
            
                {data.map(x)}
            
            <tr>
                <th>
               
                </th>
                <th>
                    Spent
                </th>
                <th>
                    {sum}
                </th>
            </tr>


            <tr>
                <th>

               {/* <button onClick={handleDownload} className="pdf" >Download PDF</button> */}
      
                </th>
                <th>
                Avl Balance
                </th>
                <th>
                    {balance}
                </th>
            </tr>
    </table>


    
    </section>

    <div className="pdf_main">
    <button  onClick={handleDownload} className="pdf" >Download PDF</button>
    </div >
    {/* <div className="pdf_main">
       
        <button onClick={handleDownload} className="pdf">Download PDF</button>
        <button className="pdf" onClick={() => window.location.reload()}>Convert to PDF</button>
    </div> */}
   


   {/* <Footer /> */}
    

    </div>
              }

              
}