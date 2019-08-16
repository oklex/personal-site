import React from "react";
import backIcon from "../../img/back-link.svg";

interface IExpItemBoxProps {
  show: boolean;
  titleSection: JSX.Element;
  children: JSX.Element[] | JSX.Element;
  closeModal: () => void;
}

class ExpItemBox extends React.Component<IExpItemBoxProps, {}> {
  displayModal = () => {
    if (this.props.show === true) {
      return (
        <div>
          <button className="btn-back" onClick={() => this.props.closeModal}>
            <span>
              <img src={backIcon} alt="icon-back" />
              <h3>Back to experiences</h3>
            </span>
          </button>
          {this.props.titleSection}
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return <div>{this.displayModal()}</div>;
  }
}

export default ExpItemBox;
