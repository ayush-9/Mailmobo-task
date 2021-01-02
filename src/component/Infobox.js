import React from 'react'

export default function Infobox({ood,...props}) {
   // console.log(ood);
   
    //setOod(ood);
    return (
        <div className="heading" onClick={props.onClick}>
            <h1>{props.name}</h1>
            <h1>{ood.length}</h1>
        </div>
    )
}