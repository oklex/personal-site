import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

class About extends React.Component<{}, {}> {
  render() {
    return (
        <PageWrapper subtitle="About me" title="I love building things">
          <div>
            <p>
              Everything started with a passion for imagination. <br/>
              I believe full-stack development is a tool to bring ideas into reality.
            </p>
            <br />
            <p>
              <strong>2013</strong> - My first wordpress site. Made for an
              event I was hosting.
            </p>
            <p>
              <strong>2015</strong> - Started a Computer science degree at Simon
              Fraser University.
            </p>
            <p>
              <strong>2019</strong> - Started my first Developer internship at a
              start-up.
            </p>
          </div>
        </PageWrapper>
    );
  }
}
export default About;
