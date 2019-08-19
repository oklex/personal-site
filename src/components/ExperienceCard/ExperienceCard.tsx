import React from "react";
import "./ExperienceCard.scss";
import linkIcon from "../../img/new-link.svg";

export interface IExperienceCardDetails {
  id?: number | null; // only for future use
  dateDetails: string;
  jobTitle: string;
  jobType?: string;
  CompanyName?: string;
  jobDetails: JSX.Element;
}

interface IExperienceCardProps extends IExperienceCardDetails {
  callbackModal: (content: IExperienceCardDetails) => void
}

interface IExperienceCardState {
}

class ExperienceCard extends React.Component<
  IExperienceCardProps,
  IExperienceCardState
> {

  // toggleModal = async () => {
  //   const oldState = this.state.showModal;
  //   await this.setState({
  //     showModal: !oldState
  //   });
  //   console.log(this.state.showModal);
  // };

  showMetaInfo = () => {
    var metaString = "";
    if (this.props.jobType) metaString = this.props.jobType;
    if (this.props.CompanyName) metaString += " - " + this.props.CompanyName;
    return <h4 className="blueTag">{metaString}</h4>;
  };

  // showItemBox = () => {
  //   return (
  //     <ExpItemBox
  //       show={this.state.showModal}
  //       closeModal={this.toggleModal}
  //       titleSection={
  //         <div>
  //           <h3>{this.props.dateDetails}</h3>
  //           <h2>{this.props.jobTitle}</h2>
  //           {this.showMetaInfo()}
  //         </div>
  //       }
  //     >
  //       {this.props.jobDetails}
  //     </ExpItemBox>
  //   );
  // };

  requestModal = () => {
    console.log('requesting modal')
      const modalProps:IExperienceCardDetails = {
        dateDetails: this.props.dateDetails,
        jobTitle: this.props.jobTitle,
        jobType: this.props.jobType,
        jobDetails: this.props.jobDetails,
      }
      this.props.callbackModal(modalProps)
  };

  render() {
    return (
      <div className="exp-card" onClick={() => this.requestModal()}>
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
