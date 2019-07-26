import React, { Component, Fragment } from 'react';

class Aside extends Component {
  render (){
    return (
      <Fragment>
        <aside>
          <ul>
            <div class ="logo">
            <p><img src="image/github.png" class ="logoImg"/> </p>
            <p><img src="image/linkedIn.png" class ="logoImg"/> </p>
            </div>
            <div id='promise'>
            <p id="kp"><strong>Knowledge = Power.</strong></p>
            <p>Our Promise: <br/>We use SQREEN for securing your data requests from this site.<br/>We will not sell, release, or store results of your searches.
            </p>
            </div>
          </ul>
        </aside>
      </Fragment>
    );//end return
  }//end render
}//END CLASS

export default Aside;