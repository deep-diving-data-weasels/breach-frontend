import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

export default class header extends Component {

  render(){
    return(    
      <Fragment>
        <header>
          <ul>
            <img class="logo" src="image/logo.jpg" />
            <Link to="/">Home</Link><br/>
            <Link to="/aboutus">AboutUs</Link><br/>
          </ul>
          <div>
            <Link to="/">Sign Out</Link><br/>
          </div>
        </header>
      </Fragment>   
    )}
}