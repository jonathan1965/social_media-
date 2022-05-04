  import React, { Component } from 'react';
  import { withRouter, Link } from 'react-router-dom';
  import {AppBar, FlatButton, IconButton, IconMenu, Avatar} from 'material-ui';
  import IconHome from 'material-ui/svg-icons/action/home';
  import IconNotification from 'material-ui/svg-icons/social/notifications';
  import IconMail from 'material-ui/svg-icons/content/mail';
  import IconSearch from 'material-ui/svg-icons/action/search';
  import './Header.css'

  class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: window.data.auth.user,
        searchBarClassName: "hidden"
      }
    }
   
    render() {
      const mainBar = (
        <div className="container">
          <div className="appbar-links">
            <FlatButton icon={<IconHome style={{fill:'white'}}/>} label="Home" className="appbar-btn"/>
            <FlatButton icon={<IconNotification  style={{fill:'white'}}/>} label="Notifications" className="appbar-btn"/>
            <FlatButton icon={<IconMail style={{fill:'white'}}/>} label="Messages" className="appbar-btn"/>
            <IconMenu className="pull-right" iconButtonElement={<IconButton className="appbar-btn"><Avatar src={this.state.user.profilePicture} /></IconButton>}>
          </IconMenu>
          <IconButton className="pull-right" style={{top:'15px'}} ><IconSearch className="appbar-btn"/></IconButton>
        </div>
      </div>
    );

    return (
      <header>
        <AppBar
          id="main-bar"
          title={mainBar}
          showMenuIconButton={false}
          style={{position:'fixed'}}
        />
      
      </header>
    );
  }
  } 

  export default withRouter(Header);
