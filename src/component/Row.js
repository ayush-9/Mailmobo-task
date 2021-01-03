import React, { Fragment } from 'react'
export default function Row({ row,status,key }) {
    //console.log(row);
    if(status==="NFI"){
    return (
       <>
       
            <td className="om1" >#{row.awbno}</td>
            <td className="geeks">{row.carrier}</td>
            
            <td className="geeks">{row.carrier}</td>
            
            <td className="om2">{row.current_status}</td>
        </>
    )}
    else{
      return(  <>
       
            <td className="om1" >#{row.awbno}</td>
            <td className="geeks">{row.carrier}</td>
            <td className="geeks">&nbsp;&nbsp;&nbsp;&nbsp;{row.from}</td>
            <td className="geeks">{row.to}</td>
            <td className="geeks">{row.carrier}</td>
            <td className="geeks">&nbsp;&nbsp;&nbsp;{row.pickup_date.split(" ")[0]}</td>
            <td className="geeks">&nbsp;&nbsp;&nbsp;{row.extra_fields.expected_delivery_date.split(" ")[0]}</td>
            <td className="om2"><h6>{row.current_status}</h6></td>
        </>)
    }
}