import React from "react";
import { useState } from "react";

const Givemachines = () => {
  const [yourName,setyourName]=useState("");
  const [contact,setContact]=useState("");
  const [machineName,setmachineName]=useState("");
  const [rentDuration,setrentDuration]=useState("");
  const [rentPrice,setrentPrice]=useState("");
  const [city,setCity]=useState("");
  
    const collectData=async()=>{
        console.warn(yourName,contact);
        let result=await fetch("http://localhost:5600/giverent",{
          method:'post',
          body:JSON.stringify({yourName,contact,machineName,rentDuration,rentPrice,city}),
          headers:{
            "Content-Type":"application/json"
          }
        })
        result=await result.json();
        console.warn(result);
    }
  return (
    <div>
      <h1>Input page</h1>

      

  <div class="form-group" style={{padding:"20px"}}>
    <label for="exampleInputEmail1"> Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" value={yourName} onChange={(e)=>setyourName(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group" style={{padding:"20px"}}>
    <label for="exampleInputPassword1">Your Contact No.</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Contact No." value={contact} onChange={(e)=>setContact(e.target.value)}/>
  </div>
  <div class="form-group" style={{padding:"20px"}}>
    <label for="exampleInputPassword1">Your Machine Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Machine Name" value={machineName} onChange={(e)=>setmachineName(e.target.value)}/>
  </div>
  <div class="form-group" style={{padding:"20px"}}>
    <label for="exampleInputPassword1">Rent Duration(in days)</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Rent Duration" value={rentDuration} onChange={(e)=>setrentDuration(e.target.value)}/>
  </div>
  <div class="form-group" style={{padding:"20px"}}>
    <label for="exampleInputPassword1">Rent Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Rent Price" value={rentPrice} onChange={(e)=>setrentPrice(e.target.value)}/>
  </div>
  <div class="form-group" style={{padding:"20px"}}>
    <label for="exampleInputPassword1">Your City</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your City" value={city} onChange={(e)=>setCity(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={collectData}>Submit</button>
  

    </div>
  );
};

export default Givemachines;



