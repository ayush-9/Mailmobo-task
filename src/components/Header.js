import React, { useState, useContext } from 'react'
import Infobox from './Infobox';
import { data } from "./context";
import RightTable from './RightTable';
export default function Header() {
    const { requests,OOD,DEL,INT,DEX,NFI } = React.useContext(data);
    
    //console.log(requests);
    const [status, setStatus] = useState("DEL");
    // const [d, setD] = useState({});
    // setD(OOD);
    return (
        <div className="container">
            <div className="header">
            <Infobox onClick={(e) => setStatus("DEL")}
            ood={DEL}
            name={"DEL"}
          />
            <Infobox onClick={(e) => setStatus("OOD")}
            ood={OOD}
            name={"OOD"}
          />
          <Infobox onClick={(e) => setStatus("INT")}
            ood={INT}
            name={"INT"}
          />
          <Infobox onClick={(e) => setStatus("DEX")}
            ood={DEX}
            name={"DEX"}
          />
          <Infobox onClick={(e) => setStatus("NFI")}
            ood={NFI}
            name={"NFI"}
          />
        </div>
        <div>
          <RightTable status={status} requests={requests}/>
        </div>
        </div>
        
    )
}