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
        <p>Site URL: <a href={this.props.resObj.Domain}>{this.props.resObj.Domain}</a></p>
        <p>Date of Breach: {this.props.resObj.BreachDate}</p>
        <p>Est. Number of people impacted: {this.props.resObj.PwnCount}</p>
        <Markup content={this.props.resObj.Description}></Markup>
        <p>Data types at risk: {this.props.resObj.DataClasses.join(', ')}</p>
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
        <p>Date posted: {this.props.resObj.posted}</p>
        <p id="socialResultUrl">URL: <a href={this.props.resObj.url}>{this.props.resObj.url}</a></p>
        <p>{this.props.resObj.text}</p>
      </div>
    );
  }// end render
}// end SocialResult
// Results - Componet to hold each result sub components.
export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render () {
    console.log('test 1', this.state);
    console.log('test 2', this.props);
    return (
      <Fragment>
        <Header />
        <Aside />
        <main>
          <section id="resultSection">
            <div id='pwndSide'>
              <h2>PWND Results</h2>
              {
                (this.state.width <= 560) 
                ? 
                this.props.apiPwnd.splice(0,2).map( (pwndObj,idx) => <PwndResult resObj={pwndObj}/>) 
                :
                this.props.apiPwnd.map( (pwndObj,idx) => <PwndResult resObj={pwndObj}/>)
              }
            </div>
            <div id='socialSide'>
              <h2>Social Results</h2>
              {
                (this.state.width <= 560) 
                ?
                this.props.apiSocial.posts.splice(0,2).map( (socialObj,idx) => <SocialResult resObj={socialObj}/>)
                :
                this.props.apiSocial.posts.map( (socialObj,idx) => <SocialResult resObj={socialObj}/>)
              }
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }// end render
}// end Results