import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <PageWrapper subtitle="Alexander Kim" title="Junior full-stack dev.">
        <div>
          <p>
            If you would like to see my current projects or are interested in
            starting a project together, please get in touch.
          </p>
          <p>alexkim.347@gmail.com</p>
          <p>
              Connect with me elsewhere
          </p>
          <p>
              LinkedIn  -  Github
          </p>
        </div>
      </PageWrapper>
    );
  }
}
export default Home;
