import React, { useState, useContext } from 'react'
import Infobox from './Infobox';
import { data } from "./context";
import LeftTable from './LeftTable';
import Righttable from './Righttable';
export default function Header() {
    const { requests,OOD,DEL,INT,DEX,NFI } = React.useContext(data);
    
    //console.log(requests);
    const [status, setStatus] = useState("DEL");
    const [id, setSelectedid] = useState("5d309ea2048c0a3321692de7");
    // const [d, setD] = useState({});
    // setD(OOD);
    return (
        <>
        
        <div className="container">
            <div className="header">
            <Infobox onClick={(e) => {setStatus("DEL");    
        }}
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
        </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <Righttable id={id} requests={requests} />
            </div>
         <div className="col-md-7">
         <LeftTable status={status} requests={requests} setSelectedid={setSelectedid}/>
         </div>
         </div>
      </>
        
        
    )
}