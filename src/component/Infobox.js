import React from 'react'

export default function Infobox({ood,active,...props}) {
   // console.log(ood);
   
    //setOod(ood);
    return (
        <div className={`heading ${active && "active"}`} onClick={props.onClick}>
            <h1>{props.name}</h1>
            <h2>{ood.length}</h2>
        </div>
    )
}