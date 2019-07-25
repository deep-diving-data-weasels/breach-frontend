// React
import React, { Component, Fragment } from 'react';
import { Markup } from 'interweave';

// Components
import Header from './Header.js';
import Aside from './Aside.js';
import Footer from './Footer.js';

// PwndResult class - used to build results
class PwndResult extends Component{ 

  render() {
    return(
      <div class='PwndResult'>
        <h3>{this.props.resObj.Name}</h3>
        <p>{this.props.resObj.Title}</p>
        <p>{this.props.resObj.Domain}</p>
        <p>{this.props.resObj.BreachDate}</p>
        <p>{this.props.resObj.PwnCount}</p>
        <Markup content={this.props.resObj.Description}></Markup>
        <p>{this.props.resObj.DataClasses.join(', ')}</p>
      </div>
    );
  }// end render
}// end PwndResult

// SocialResult class - used to build results
class SocialResult extends Component{ 

  render() {
    return(
      <div class='SocialResult'>
        <h3>{this.props.resObj.user.name}</h3>
        <img src = {this.props.resObj.image}></img>
        <p>{this.props.resObj.posted}</p>
        <p><a href={this.props.resObj.url}>{this.props.resObj.url}</a></p>
        <p>{this.props.resObj.text}</p>
      </div>
    );
  }// end render
}// end SocialResult

// Results - Componet to hold each result sub components.
export default class Results extends Component {
 
  // constructor(props){
  //   super(props);
  // } // end constructor

  render () {
    console.log('test 1', this.state);
    console.log('test 2', this.props);
    return (
      <Fragment>
        <Header />
        <main>
          <section id="resultSection">
            <h2>PWND Results</h2>
            {
              this.props.apiPwnd.map( (pwndObj,idx) => <PwndResult resObj={pwndObj}/>)
            }
            <h2>Social Results</h2>
            {
              this.props.apiSocial.posts.map( (socialObj,idx) => <SocialResult resObj={socialObj}/>)
            }
          </section>
          <Aside />
        </main>
        <Footer />
      </Fragment>
    );
  }// end render
}// end Results

