import React, {useState, useContext } from 'react'
import Row from './Row';

export default function LeftTable({status,requests,setSelectedid}) {
    let st = requests.filter((entry) => entry.current_status_code === status);
   //const [item, setItemid] = useState("5d309ea2048c0a3321692de7");
   // console.log(st);
   
   function fetch(event){
    setSelectedid(event);
   }
   if(status==="NFI"){
       
    return (
        <div className="left-table">
            <table className="table">
            <thead>
                
                    <th><h6>AWB NUMBER</h6></th>
                    <th><h6>TRANSPORTER</h6></th>
                    
                    <th><h6>BRAND</h6></th>
                    
                    <th><h6>STATUS</h6></th>
                
                </thead>
                </table>
                <div className="sc">
                <table className = "gfg">

                {st.map((item) => {
                return <tr onClick={()=>fetch(item._id)} ><Row value={item._id} row={item} status={status} /></tr>;
                })}
                </table>
                                </div>
               
                
             
           
        </div>
    )}
    
   
   else{
    return (
        <div className="left-table">
            <table>
            <thead>
                
                    <th><h6>AWB NUMBER</h6></th>
                    <th><h6>TRANSPORTER</h6></th>
                    <th><h6 className="h6c">SOURCE</h6></th>
                    <th><h6>DESTINATION</h6></th>
                    <th><h6>BRAND</h6></th>
                    <th><h6 >START DATE</h6></th>
                    <th><h6 >ETD</h6></th>
                    <th><h6 className="h6c">&nbsp;&nbsp;STATUS</h6></th>
                
                </thead>
                </table>
                <div className="sc">
                <table className = "gfg">

                {st.map((item) => {
                return <tr onClick={()=>fetch(item._id)} ><Row value={item._id} row={item} status={status} /></tr>;
                })}
                </table>
                                </div>
               
                
             
           
        </div>
    )}
}