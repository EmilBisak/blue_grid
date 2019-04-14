import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  state = {
    selectedTab: "template",
    
  };

  selectNavTab = (tabName) => {
    this.setState({ selectedTab: tabName })
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <Fragment>
        <Header 
        selectedTab={selectedTab} 
        selectNavTab={this.selectNavTab}/>
        <Main />
      </Fragment>
    );
  }
}

export default App;
