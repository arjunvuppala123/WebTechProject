import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
  padding: 0.1rem;
}
.navbar-nav li{
  padding-right:20px ;
}
.nav-link{
  font-size:1.1em !important;

}
.nav-item.active>a{
  color:rgba(56, 134, 236, 0.815);

}

.navbar {
  transition: all 0.4s;
}

.navbar .nav-link {
  color: #fff;
}

.navbar .nav-link:hover,
.navbar .nav-link:focus {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.navbar.active {
  background-color:white;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar.active .nav-link {
  color: rgb(51, 51, 51);
}
.navbar.active .nav-item.active>a{
  color:rgb(59, 83, 219);

}


.navbar.active .nav-link:hover,
.navbar.active .nav-link:focus {
  color: #555;
  text-decoration: none;
}

.navbar.active .navbar-brand {
  color: #555;
}

@media (max-width: 991.98px) {
  .navbar {
      background: #fff;
  }

  .navbar .navbar-brand, .navbar .nav-link {
      color: #555;
  }

  .navbar .nav-link:hover,
  .navbar .nav-link:focus {
    color: rgb(10, 10, 10);
    text-decoration: none;
  }

}
.nav-link{
  font-size:18px;
  padding: 20px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
  opacity: 0.9;
}
.nav-link:hover{
  opacity: 1;
}
/* :before inserts something before the content of each element */
.nav-link::before {
  transition: 250ms;
  height: 3px;
  content: "";
  left:-0.1px;
  position: absolute;
  background-color: rgb(59, 83, 219)
}

.nav-link::before {
  width: 0%;
  bottom: 10px;
}

.nav-link:hover::before {
  width: 100%;
}
.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
}
`
export const NavigationBar = () => (
  <Styles>  
  <div class="navbar-container">
    <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand">
        <img src="music.png" width="85" height="75" id="logo" class="d-inline-block align-top" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul id="options" class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/billboard">Top 10's</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/review">Latest Release</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/explore">Explore</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/register" tabindex="-1" aria-disabled="true">Register</a>
          </li>
        </ul>
      </div>
    </Nav>
  </div>
  </Styles>
)
