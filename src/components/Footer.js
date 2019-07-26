import React, { Component, Fragment } from 'react';

export default class Footer extends Component {

  setData(data) {
    this.setState(data);
  }
 
  render () {
    console.log(this.state);
    return (
      <Fragment>
        <footer>
        <a title='Realtime application protection' href='https://www.sqreen.com/?utm_source=badge'><img src='https://s3-eu-west-1.amazonaws.com/sqreen-assets/badges/20171107/sqreen-dark-badge.svg' alt='Sqreen | Runtime Application Protection' /></a>
        </footer>
      </Fragment>
    );
  }
}