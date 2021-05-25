import React, { Component } from "react";
import spinner from '../../../static/images/loader.gif'


class PageLoader extends Component {
  render() {
    
    return (
      <div className="loading-container">
        <div className="loading">
          <img src={spinner} 
               alt="Loading..."
               style={{width: '50px', margin:'auto', display:'block', justifyContent: 'center'}}
          ></img>
        </div>
      </div>
    );
  }
}

export default PageLoader;