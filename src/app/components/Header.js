import React from 'react';

import "../css/Header.css";

const Header = (props) => {
    const { selectedTab, selectedCards, selectNavTab } = props;
    return (
        <div className="container">
            <div className="row">
                <header>
                    <h1>Manage Subscription</h1>
                    <nav>
                        <ul>
                            <li
                                className={selectedTab === "templates" ? "active" : ""}
                                onClick={() => selectNavTab("templates")}
                            >{selectedCards.size && selectedTab === "templates" ? `Templates (${selectedCards.size})` : "Templates"}</li>
                            <li
                                className={selectedTab === "products" ? "active" : ""}
                                onClick={() => selectNavTab("products")}
                            >{selectedCards.size && selectedTab === "products" ? `Products (${selectedCards.size})` : "Products"}</li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
};

export default Header;
