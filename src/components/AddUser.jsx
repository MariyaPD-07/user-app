import React, { useState } from 'react'
import UserNavbar from './UserNavbar'

const AddUser = () => {
    const[input,changeInput]=useState(
        {Id:"",Name:"",Username:"",Email:"",Address:"",Phoneno:"",Website:"",Company:""}
    )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
    }
  return (
    <div>
        <UserNavbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Id</label>
<input type="text" className="form-control" name="Id" value={input.Id} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name="Name" value={input.Name}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Username</label>
<input type="text" className="form-control" name="Username" value={input.Username}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        
<label htmlFor="" className="form-label">Email</label>
<input type="text" className="form-control" name="Email" value={input.Email}onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">Address</label>
<textarea name="Address" id="" className="form-control" value={input.Address}onChange={inputHandler}></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">Phone no</label>
<input type="text" className="form-control" name="Phoneno"value={input.Phoneno}onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Website</label>
        <input type="text" className="form-control" name="Website" value={input.Website}onChange={inputHandler} />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">Company</label>
<input type="text" className="form-control" name="Company" value={input.Company}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <button className="btn btn-success"onClick={readValues}>Submit</button>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddUser