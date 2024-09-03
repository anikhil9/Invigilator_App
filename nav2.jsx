import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './nav2.css'
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
<nav class="navbar">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WasteMangement</a>
    </div>
   
       <a className="a1" href="/">Home</a>
      <a className="a2" href="/about">About us</a>
      <a className="a2" href="/news">News</a>
      <a className="a2" href="/form_proj"><span class="glyphicon glyphicon-user"></span>Login </a>
      <a className="a2" href="/App7"><span class="glyphicon glyphicon-log-in"></span> Sign Up</a>
  
  </div>
</nav> 
    );
  }
}

export default NavbarPage;