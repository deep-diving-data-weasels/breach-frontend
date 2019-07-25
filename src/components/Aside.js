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

            
          </ul>
        </aside>
      </Fragment>
    );//end return
  }//end render
}//END CLASS

export default Aside;