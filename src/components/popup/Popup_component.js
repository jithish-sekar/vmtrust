import React, { Component } from "react";
import Modal from "react-modal";
import "./Popup_component.scss";

export default class PopupComponent extends Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: true,
    };
  }
  openPopup = () => {
    this.setState({
      isOpenModal: true,
    });
  };
  closePopup = () => {
    this.setState({
      isOpenModal: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isOpenModal && (
          <Modal
            className="modalClass"
            isOpen={true}
            onRequestClose={() => this.closePopup()}
          >
            <div className="popupContainer">
              <h5 onClick={() => this.closePopup()}>x</h5>
              <h3>VM Trust</h3>
              <img src="vmlogo.jpeg" alt="logo" />
              <h4>Contact us</h4>
              <span>Email :</span>
              <span>vmtrust104@gmail.com</span>
              <br />
              <br />
              <span>Phone:</span>
              <span>9597719752,9080097063</span>
            </div>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
