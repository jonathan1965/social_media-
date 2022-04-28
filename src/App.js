import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './css/bootstrap-grid.css';
import './css/animate.css';
import './data'
const defautTheme = getMuiTheme(lightBaseTheme)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: defautTheme
    }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
        <div className="content-wrapper">
          <Header/>
          <Home/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
