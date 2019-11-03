import React from "react";
import Modal from "@material-ui/core/Modal";

export default function simpleModal(ComponentParam) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.state = {
        open: false
      };
    }
    handleOpen() {
      this.setState({ open: true });
    }
    handleClose() {
      this.setState({ open: false });
    }
    render() {
      return (
        <div>
          <a onClick={this.handleOpen}>
            {this.props.label}
          </a>
          <Modal
            aria-labelledby="Üzenj nekünk"
            aria-describedby="Gyogytorna jelentkezes üzenetben"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <ComponentParam {...this.props} />
          </Modal>
        </div>
      );
    }
  };
}
