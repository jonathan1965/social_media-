import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './css/bootstrap-grid.css';
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
      <MuiThemeProvider>
        <div className="content-wrapper">
          <Header/>
          <Home/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
