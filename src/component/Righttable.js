import React from 'react'
import logo from "../destination.svg";
import logo1 from "../warehouse.svg";
export default function Righttable({id,requests}) {
    let ret_data = requests.filter((entry) => entry._id === id);
    //let ret_data = requests.filter((entry) => entry._id === id);
    let d=ret_data[0];
   
  console.log(typeof(d));
let u=[];
let location=[];
let time=[];
  for(let i in d)
  {
    u=d['scan']
  }
  for(let i in u)
  {
   location[i]=u[i].location;
   time[i]=u[i].time;
  }
  let le=location.length;
  console.log();
  console.log(time);
    return (
        <div class="right">
    <div class="row">
        <div class="col-md-12">
        <img src={logo} className="logo"/>
            <div class="card">
                
                <div class="card-body">
                    <div id="content">
                        <ul class="timeline">
                            <div className="row">
                            <div className="col-md-6">
                            {location.map((value,index)=>{return <h2 className="event" key={index}>{value}</h2>})}
                            </div>
                            <div className="col-md-6">
                            {time.map((value,index)=>{return <h2 className="event1" key={index}>{value}</h2>})}
                                </div>
                            
                           
                            </div>
                            
                           
                        </ul>
                    </div>
                </div>
            </div>
            <img src={logo1} className="logo"/>
        </div>
    </div>
</div>
       
    )
}