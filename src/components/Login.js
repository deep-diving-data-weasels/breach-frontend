import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router';
import superagent from 'superagent';

// import Components
import Aside from './Aside.js';
import Header from './Header.js';
import Footer from './Footer.js';

// import style 


//Error Handler
function handleError (err, res) {
  console.error(err);
  if (res) res.status(500).send('Not authorized for access');
}

function validateEmail(email){
  let regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m;
  return regex.test(email);
};


// Login class 
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={isLogin: false};
    this.loginClick = this.loginClick.bind(this);
  } // constructor end
  
  loginClick(event){
   //TODO: backURL - Deploy
    event.preventDefault();
    //for local testing
    // const backEndURL = 'http://localhost:3000/pg';
    const url = 'https://operation-breach.herokuapp.com/pg';
    if ( validateEmail(event.target['username'].value) ){
      superagent.get(url)
        .query({username: event.target['username'].value, password:event.target['password'].value})
        .then(res => {
        //TODO: check flag, if correct, move to search.
        this.props.history.push("/search");
        //TODO: if it's not correct, prompt and do nothing.
        }).catch(e=>console.error(e));
    }
    else{
      alert("Please enter a Valid Email address.");
    }
  } // loginClick end
  
  /*
    

  */

  render () {
    return (
      <Fragment>
        <Header />
        <Aside />
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p><b>Login.</b><br/><b>Search</b> to see where your information has been stolen in a hack.<br/><b>See</b> where that email has been tagged on the internet.</p>
          <form onSubmit={this.loginClick}>
            <div>
              <input name="username" id="username" type="text" placeholder="Username Here"></input>
            </div>
            <div>
              <input name="password" id="password" type="password" placeholder="Password" minlength="1"></input>
            </div>
            <button type="submit" value="submit">Log In</button>
          </form>
        </main>
        <Footer />
      </Fragment>
    );
  }// render end
} // Login end

