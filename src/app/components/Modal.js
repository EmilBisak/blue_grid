import React from 'react';


const Modal = (props) => (
    <div className={props.isModalOpen ? "modal-holder show" : "modal-holder hide"}>
        <span onClick={props.closeModal} className="exit-modal">X</span>
        <div className="modal">
            <h2>{`Selected ${props.selectedTab}`}</h2>
            <ul>
                {props.selectedListJsx}
            </ul>
        </div>
    </div>
);

export default Modal;
