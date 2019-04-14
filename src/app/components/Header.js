import React from 'react';

import "../css/Header.css";

const Header = (props) => (
    <div className="container">
        <div className="row">
            <header>
                <h1>Manage Subscription</h1>
                <nav>
                    <ul>
                        <li
                            className={props.selectedTab === "template" ? "active" : ""}
                            onClick={() => props.selectNavTab("template")}
                        >Templates</li>
                        <li
                            className={props.selectedTab === "products" ? "active" : ""}
                            onClick={() => props.selectNavTab("products")}
                        >Products</li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
);

export default Header;
