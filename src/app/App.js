import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import { DOMAIN } from "./shared/constants";
import { fetchData } from "./shared/fetchData";

class App extends Component {
  state = {
    selectedTab: "templates",
    selectedCards: new Set(),
    data: [],
    isLoading: true,
    isSelected: false,
    isModalOpen: false
  };
  
  selectNavTab = (tabName) => {
    this.setState({
      selectedTab: tabName,
      selectedCards: new Set()
    })
  }
  
  componentDidMount() {
    const { selectedTab } = this.state;
    
    fetchData(DOMAIN + selectedTab, this.loading)
      .then(data => {
        this.setState({
          data,
          isLoading: false
        })
      })

  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedTab } = this.state;

    if (selectedTab !== prevState.selectedTab) {

      this.setState({ selectedTab })

      fetchData(DOMAIN + selectedTab, this.loading)
        .then(data => {
          this.setState({
            data,
            isLoading: false
          })
        })
    }

  }

  loading = () => {
    this.setState({ isLoading: true })
  }

  selectCard = (event) => {
    const { selectedCards } = this.state;
    let cardTitle = event.target.parentNode.parentNode.firstChild.firstChild.innerHTML;
    let targetEl = event.target;
    let selectedCardsSet = selectedCards;
    targetEl.classList.toggle("selected");



    if (selectedCardsSet.has(cardTitle)) {
      selectedCardsSet.delete(cardTitle);
    } else {
      selectedCardsSet.add(cardTitle);
    }


    this.setState({
      selectedCards: selectedCardsSet
    })
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
}
  closeModal = () => {
    this.setState({ isModalOpen: false })
}



  render() {
    const { selectedTab, data, isLoading, isSelected, selectedCards, isModalOpen } = this.state;

    return (
      <Fragment>

        <Header
          selectedTab={selectedTab}
          selectedCards={selectedCards}
          selectNavTab={this.selectNavTab}
          />

        <Main
          selectedTab={selectedTab}
          selectedCards={selectedCards}
          selectCard={this.selectCard}
          openModal={this.openModal}
          closeModal={this.closeModal}
          isModalOpen={isModalOpen}
          isSelected={isSelected}
          data={data}
          isLoading={isLoading}
        />

      </Fragment>
    );
  }
}

export default App;
