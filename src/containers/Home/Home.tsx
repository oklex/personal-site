import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className=' top-offset'>
        <PageWrapper subtitle="Alexander Kim" title="Junior full-stack dev.">
          <div className="text-wrapper">
            <div className="spacer" />
            <p>
              If you would like to see my current projects or are interested in
              starting a project together, please get in touch.
            </p>
            <p className="light-font"><a href='mailto:alexkim.347@gmail.com'>alexkim.347@gmail.com</a></p>
            <p>Connect with me elsewhere</p>
            <p className="light-font"><a href='https://www.linkedin.com/in/akim-97/'>LinkedIn</a> - <a href='https://github.com/oklex'>Github</a></p>
          </div>
        </PageWrapper>
        </div>
    );
  }
}
export default Home;
