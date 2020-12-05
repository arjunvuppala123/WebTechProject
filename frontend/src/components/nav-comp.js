import React, {Component} from 'react';

class nav extends Component
{
    render() {
       return(
           <nav className = "navbar navbar-expand navbar-light fixed-top">
               <div className = "container">
                   <a href="http://localhost:3000/home" className="navbar-brand" id="home-button">Home</a>
                   <div className = "collapse navbar-collapse">
                       <ul className = "navbar-nav ml-auto">
                           <li className="nav-item" id="login">
                               <a href ="http://localhost:3000/login" className="nav-link">Login</a>
                           </li>
                           <li className="nav-item" if="register">
                               <a href ="http://localhost:3000/register" className="nav-link">Register</a>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       )
    }
}

export default nav;