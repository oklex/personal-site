import React from "react";
import "./ExperienceCard.scss";
import linkIcon from "../../img/new-link.svg";
import ExpItemBox from "./ExpItemBox";

interface IExperienceCardProps {
  id?: number;
  dateDetails: string;
  jobTitle: string;
  jobType?: string;
  CompanyName?: string;
  JobDetails: JSX.Element;
}

interface IExperienceCardState {
  showModal: boolean;
}

class ExperienceCard extends React.Component<
  IExperienceCardProps,
  IExperienceCardState
> {
  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
    console.log(this.state.showModal);
  };

  closeModal = async () => {
    console.log("closing modal");
    const oldState = this.state.showModal
    await this.setState({
      showModal: !oldState
    });
    console.log(this.state.showModal);
  };

  showMetaInfo = () => {
    var metaString = "";
    if (this.props.jobType) metaString = this.props.jobType;
    if (this.props.CompanyName) metaString += " - " + this.props.CompanyName;
    return <h4 className="blueTag">{metaString}</h4>;
  };

  showItemBox = () => {
    return (
      <ExpItemBox
        show={this.state.showModal}
        closeModal={this.closeModal}
        titleSection={
          <div>
            <h3>{this.props.dateDetails}</h3>
            <h2>{this.props.jobTitle}</h2>
            {this.showMetaInfo()}
          </div>
        }
      >
        {this.props.JobDetails}
      </ExpItemBox>
    );
  };

  showModal = () => {
    if (this.state.showModal) {
      return <button onClick={() => {
        this.setState({
          showModal: false
        })
      }}> close modal </button>
    } else {
      return null
    }
  }

  render() {
    console.log(this.state.showModal);
    return (
      <div className="exp-card" onClick={() => this.openModal()}>
        <div className="flex-between">
          <h3>{this.props.dateDetails}</h3>
          {/* <img src={linkIcon} alt="new-link-icon" /> */}
        </div>
        <h2>{this.props.jobTitle}</h2>
        {this.showMetaInfo()}
      </div>
    );
  }
}

export default ExperienceCard;
