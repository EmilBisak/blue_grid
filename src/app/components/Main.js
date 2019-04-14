import React, { Component } from "react";
import Template from "./Template";
import Products from "./Products";



class Main extends Component {
    state = {
        selectedTab: "template"

    };

    changePage = () => {
        this.setState({ selectedTab: "products" })
    }



    render() {
        const { selectedTab } = this.state
        return selectedTab === "template"
            ?
            <Template changePage={this.changePage} />
            :
            <Products />
    }
}

export default Main;
