import React, { Component, Fragment } from 'react';

class Aside extends Component {
  render (){
    return (
      <Fragment>
        <aside>
          <p><strong>Knowledge = Power.</strong></p>
          <p id="kp">Our Promise: <br/>We use SQREEN for securing your data requests from this site.<br/>We will not sell, release, or store results of your searches.
          </p>
          <div id='promise'>
            <img src="image/github.png" class ="logoImg"/>
            <img src="image/linkedIn.png" class ="logoImg"/>
          </div>
        </aside>
      </Fragment>
    );//end return
  }//end render
}//END CLASS

export default Aside;