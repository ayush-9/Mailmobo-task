import React from 'react'
import Row from './Row';

export default function RightTable({status,requests}) {
    let st = requests.filter((entry) => entry.current_status_code === status);
    console.log(st);
    return (
        <div className="right-table">
            <table>
            <thead>
                
                    <th><h6>AWB NUMBER</h6></th>
                    <th><h6>TRANSPORTER</h6></th>
                    <th><h6>SOURCE</h6></th>
                    <th><h6>DESTINATION</h6></th>
                    <th><h6>BRAND</h6></th>
                    <th><h6>START DATE</h6></th>
                    <th><h6>ETD</h6></th>
                    <th><h6>STATUS</h6></th>
                
                </thead>
                </table>
                <div className="sc">
                <table className = "gfg">

                {st.map((item) => {
                return <tr   ><Row key={item.id} row={item} status={status} /></tr>;
                })}
                </table>
                                </div>
               
                
             
           
        </div>
    )
}