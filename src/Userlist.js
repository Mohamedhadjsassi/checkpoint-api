import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Userlist() {
  // we will store the state of data in "data" 
    const [data , setData]=useState([])
    // when we get the data from this website we will set the data into the state
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users')
    .then ((res)=>(setData(res.data)))}
    , []); 
  return (
    <div className="App"  >
      <h1>Our users</h1>
        <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
    {data?.map((p)=>(
    <div  style={{ height: "auto", width: "800px", backgroundColor: "greenyellow", borderRadius: "15px", padding: "10px"}}> 
        <h2>{p.name}</h2>
        <h4>{p.username}</h4>
        <h4>{p.email}</h4>
        <h6>adress : {p.address.street}</h6>
        <h6>website : {p.website}</h6>
        <h6>phone : {p.phone}</h6>
        <h6>company : {p.company.name}</h6>
        
   </div>
    
   
    
    ))}
   </div>
   </div>
  )
}

export default Userlist