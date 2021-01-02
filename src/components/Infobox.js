import React from 'react'

export default function Infobox({ood,name}) {
    console.log(ood);
   
    //setOod(ood);
    return (
        <div className="heading">
            <h1>{name}</h1>
            <h1>{ood.length}</h1>
        </div>
    )
}