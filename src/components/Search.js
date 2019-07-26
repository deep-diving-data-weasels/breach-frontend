import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import {withRouter} from 'react-router-dom';
// import Component
import Header from './Header.js';
import Aside from './Aside.js';
import Footer from './Footer.js';
// import style

let dataPwnd;
let dataSocial;

function handleError(error){
  console.log('error: ', error);
}

function validateEmail(email){
  let regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m;
  return regex.test(email);
};

// Search class
export default  withRouter( class Search extends Component {
  constructor(props){
    super(props);
    this.searchPwnd = this.searchPwnd.bind(this);
    this.searchSocial = this.searchSocial.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  } // constructor end

  async searchPwnd(email) {
   //for local testing
    // const url = "http://localhost:3000/apiPwnd";
    const url = 'https://operation-breach.herokuapp.com/apiPwnd';
    superagent.get(url)
      .query({data: email})
      .then(res => {
        console.log('res: ', res);
        dataPwnd = res.body;
      console.log(dataPwnd);
      this.props.callback({pwndResult: dataPwnd});     
    });

  } // searchPwnd end
  async searchSocial(email) {
   //for local testing
    // const url = "http://localhost:3000/apiSocial";
    const url = 'https://operation-breach.herokuapp.com/apiSocial';
    superagent.get(url)
      .query({data: email})
      .then(res => {
        dataSocial = res.body;
      console.log(dataSocial);
      this.props.callback({socialResult: dataSocial});
    });
  } // searchSocial end
  
  async submitHandle(event){
    event.preventDefault();
    let email = event.target["email"].value;

    if (validateEmail(email)){
      await this.searchPwnd(email);
      await this.searchSocial(email);
      // this line must be call after the last API route
      this.props.history.push("/results");
    }
    else {
      alert("Please enter a Valid Email address.");
    }

  }

  render () {
    return (
      <Fragment>
        <Header />
        <Aside />
        <main>
          <h1>Welcome to Operation Breach</h1>
          <p><b>Search</b> to see where your information has been stolen in a hack.<br/><b>See</b> where that email has been tagged on the internet.</p>
          <br/>  
          <div>
          <form onSubmit = {this.submitHandle}>
            <input name="email" type="text" placeholder="E-mail Address "></input>
            <button type="submit" value="submit">Search</button>
          </form>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  } // render End
}) // Search class end

