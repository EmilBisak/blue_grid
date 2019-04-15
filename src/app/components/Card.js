import React, { Component } from 'react';

import "../css/Card.css";

class Card extends Component {
    state = {
        isSelected: this.props.isSelected,
        btnValue: "select"
    }

    selectCard = (event) => {
        const { isSelected } = this.state;
        let btnValue = isSelected ? "select" : "selected";

        this.props.selectCard(event)

        this.setState({
            isSelected: !isSelected,
            btnValue
        })

    }

    render() {
        const { btnValue } = this.state;
        const { cardData, listJsx, selectedTab } = this.props;
        let cardName = selectedTab === "templates" ? cardData.name.substring(1, cardData.name.length) : cardData.name;
        return (
            <div className="card-holder">
                <div className="card-wrapper">
                    <div className={`card-header ${selectedTab} ${btnValue}`}>
                        <h2>
                            {selectedTab === "templates" ? `Edge Delivery | ` : ``}<span>{cardName}</span>
                        </h2>
                    </div>
                    <div className="row">
                        <p>{cardData.description}</p>
                        <ul>
                            {listJsx}
                        </ul>
                        <h3>{cardData.price}</h3>
                        <span onClick={this.selectCard} className="select-btn">{btnValue}</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;
