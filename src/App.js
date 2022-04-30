import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './css/bootstrap-grid.css';
import './data'

class App extends Component {
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
