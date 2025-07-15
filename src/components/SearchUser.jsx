import React, { useState } from 'react'
import UserNavbar from './UserNavbar'

const SearchUser = () => {
    const[input,changeInput]=useState(
        {Username:""}
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
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Username </label>
<input type="text" className="form-control" name="Username" value={input.Username}onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<button className="btn btn-primary"onClick={readValues}>Search</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default SearchUser