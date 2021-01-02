import React from 'react'
export default function Row({ row,status }) {
    console.log(row);
        
    return (
       <>
            <td className="om1">#{row.awbno}</td>
            <td className="geeks">{row.carrier}</td>
            <td className="geeks">{row.from}</td>
            <td className="geeks">{row.to}</td>
            <td className="geeks">{row.carrier}</td>
            <td className="geeks">{row.pickup_date}</td>
            <td className="geeks">{row.extra_fields.expected_delivery_date}</td>
            <td className="om2">{row.current_status}</td>
        </>
    )
}