import React from "react";
import Modal from "@material-ui/core/Modal";

export default function simpleModal(ComponentParam) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Modal
            aria-labelledby="Üzenj nekünk"
            aria-describedby="Gyogytorna jelentkezes üzenetben"
            open={this.props.modalOpen}
            onClose={this.props.closeModal}
          >
            <ComponentParam {...this.props} />
          </Modal>
        </div>
      );
    }
  };
}
