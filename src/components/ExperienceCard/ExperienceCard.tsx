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
  modalIsOpen: boolean;
}

class ExperienceCard extends React.Component<
  IExperienceCardProps,
  IExperienceCardState
> {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
    console.log(this.state.modalIsOpen);
  };

  closeModal = async () => {
    console.log("closing modal");
    await this.setState({
      modalIsOpen: false
    });
    console.log(this.state.modalIsOpen);
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
        show={this.state.modalIsOpen}
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

  render() {
    console.log(this.state.modalIsOpen);
    return (
      <div className="exp-card" onClick={() => this.openModal()}>
        <div className="flex-between">
          <h3>{this.props.dateDetails}</h3>
          <img src={linkIcon} alt="new-link-icon" />
        </div>
        <h2>{this.props.jobTitle}</h2>
        {this.showMetaInfo()}
      </div>
    );
  }
}

export default ExperienceCard;
