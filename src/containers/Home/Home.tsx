import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import './Home.scss'

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <PageWrapper subtitle="Alexander Kim" title="Junior full-stack dev.">
        <div className='text-wrapper'>
          <div className='spacer'/>
          <p>
            If you would like to see my current projects or are interested in
            starting a project together, please get in touch.
          </p>
          <p className='light-font'>alexkim.347@gmail.com</p>
          <p>
              Connect with me elsewhere
          </p>
          <p className='light-font'>
              LinkedIn  -  Github
          </p>
        </div>
      </PageWrapper>
    );
  }
}
export default Home;
