import React, { useEffect, useState } from 'react'
import UserNavbar from './UserNavbar'
import axios from 'axios'

const ViewUser = () => {
    const[User,changeUser]=useState(
        []
    )
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/users").then(
(Response)=>{

  changeUser(Response.data)
}

      ).catch()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <UserNavbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col0-xxl-12">
<div className="row g-3">
   
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Company</th>
    </tr>
  </thead>
  <tbody>
     {User.map(
        (value,index)=>{
            return(
    <tr>
     
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.address.city}</td>
      <td>{value.phone}</td>
      <td>{value.website}</td>
      <td>{value.company.name}</td>
    
    </tr>
            )
     }
    )}
     
  </tbody>
</table>

    </div>
           
       
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewUser