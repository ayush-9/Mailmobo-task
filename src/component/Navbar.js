    import React from 'react'
import logo from "../logo.svg";
import profile from "../profile.svg";
    export default function Navbar() {
    
        return (
            <React.Fragment>
<div class="header1">
  <img id="logo" src={logo} />
  <li><a href="#" id="current">Intugine</a></li>
  <ul id="navlist">
    <li id="active"><a href="#" id="current">Home</a></li>
    <li><a href="#">Brand</a></li>
    <li><a href="#">Transporter</a></li>
    <li><a href="#"><img  src={profile} className=""/></a></li>
  </ul>
  
</div>
    

            </React.Fragment>
        
        
        )
    }