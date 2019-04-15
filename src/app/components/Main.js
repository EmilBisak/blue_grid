import React, { Component, Fragment } from "react";

import "../css/Main.css";
import Card from "./Card";
import Loading from "./Loading";
import Modal from "./Modal";


class Main extends Component {
    state = {
        selectedTab: this.props.selectedTab,
        selectedCards: this.props.selectedCards,
        isModalOpen: this.props.isModalOpen
    };



    componentDidUpdate(prevProps, prevState) {

        if (this.props !== prevProps) {

            this.setState({
                selectedTab: this.props.selectedTab,
                selectedCards: this.props.selectedCards,
                isModalOpen: this.props.isModalOpen
            })

        }
    }




    render() {
        const { selectedTab, data, isLoading, isSelected, selectCard, selectedCards, openModal, closeModal } = this.props;
        const { isModalOpen } = this.state;

        let selectedListJsx = selectedCards && [...selectedCards].map((item, i) => {
            let formatedString = item.replace("<span>", "");
            formatedString = formatedString.replace("</span>", "");
            return <li key={"selected" + i}>{formatedString}</li>
        })
        let cardJsx = data
            ?
            data.map(card => {

                let cardListJsx = card.features.map((feature, i) => {
                    return <li key={"feature" + i}>{feature}</li>
                })

                return <Card
                    key={card._id}
                    selectedTab={selectedTab}
                    cardData={card}
                    listJsx={cardListJsx}
                    selectCard={selectCard}
                    isSelected={isSelected}
                />
            })
            :
            <Loading />


        return isLoading
            ?
            <Loading />
            :
            <Fragment>
                <Modal
                    selectedTab={selectedTab}
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    selectedListJsx={selectedListJsx}
                />
                <div className="container main">
                    <div className="row">
                        {cardJsx}
                        <div className="btn-holder">
                            <span
                                className={selectedCards.size ? "next-btn enabled" : "next-btn"}
                                onClick={selectedCards.size ? openModal : null}
                            >Next</span>
                            <span>or</span>
                            <span className="back-btn">Back</span>
                        </div>
                    </div>
                </div>
            </Fragment>

    }
}


export default Main;
