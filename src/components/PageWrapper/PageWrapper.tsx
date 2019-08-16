import React from "react";
import './PageWrapper.scss'

interface IPageWrapperProps {
  subtitle?: string;
  title: string;
  children?: JSX.Element[] | JSX.Element;
}

class PageWrapper extends React.Component<IPageWrapperProps, {}> {

  showSubtitle = () => {
    if (this.props.subtitle) {
      return <h3>{this.props.subtitle}</h3>;
    } else return <div/>;
  };

  showTitle = () => {
    return <h1>{this.props.title}</h1>;
  };

  showContent = () => {
    if (this.props.children) {
      return <div>{this.props.children}</div>;
    } else return <div />;
  };

  render() {
    return (
      <div className='page'>
        {this.showSubtitle()}
        {this.showTitle()}
        {this.showContent()}
      </div>
    );
  }
}

export default PageWrapper;
