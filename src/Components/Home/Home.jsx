import React, { Component } from 'react';
import HomeUserProfile from './HomeUserProfile'
import HomeFollow from './HomeFollow'


class Home extends Component {
  componentDidMount() {
    document.title = "Home"
  }
  render() {
    return (
      <div className="container main-content">
        <div className="row">
          <div className="col-sm-3">
            <HomeUserProfile/>
          </div>
          <div className="col-sm-6">
        
            <HomeFollow/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
