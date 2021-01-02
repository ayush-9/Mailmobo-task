import React, { useState, useEffect } from "react";
import axios from "axios";
//axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
//const rootUrl = "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch";
const data = React.createContext();

const Check = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const chaeckRequests = async() => {
    const config = {
      headers: { Authorization: `Bearer tTU3gFVUdP` }
  };
  
  const bodyParameters = {
     email: "hrishikeshjain1999@gmail.com"
  };
  
  const res=await  axios.post( 
    'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
    bodyParameters,
    config
  );
   setRequests(res.data);
  };
  let OOD = requests.filter((entry) => entry.current_status_code === "OOD");
  let DEL = requests.filter((entry) => entry.current_status_code === "DEL");
  let INT = requests.filter((entry) => entry.current_status_code === "INT");
  let DEX = requests.filter((entry) => entry.current_status_code === "DEX");
  let NFI = requests.filter((entry) => entry.current_status_code === "NFI");
 // console.log(OOD,DEL,INT,DEX,NFI);
  useEffect(chaeckRequests, []);
  return (
    <data.Provider
      value={{
        requests,OOD,DEL,INT,DEX,NFI
      }}
    >
      {children}
    </data.Provider>
  );
};

export { Check, data };