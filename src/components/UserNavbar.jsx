import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">UserApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/">AddUser</Link>
        <Link class="nav-link" to="/search">SearchUser</Link>
        <Link class="nav-link" to="/delete">DeleteUser</Link>
        <Link class="nav-link" to="/view">ViewUser</Link>
    
      </div>
    </div>
  </div>
</nav>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default UserNavbar