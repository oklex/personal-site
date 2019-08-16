import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

class About extends React.Component<{}, {}> {
  render() {
    return (
        <PageWrapper subtitle="About me" title="I love building things">
          <div>
            <p>
              Everything started with a passion for creating from imagination.
              Full-stack development is a tool to bring my ideas into reality.{" "}
            </p>
            <br />
            <p>
              <strong>2013</strong> - My frist wordpress site for a student
              event I was hosting
            </p>
            <p>
              <strong>2015</strong> - Started a Computer science degree at Simon
              Fraser University
            </p>
            <p>
              <strong>2019</strong> - Started my first Developer internship at a
              start-up
            </p>
          </div>
        </PageWrapper>
    );
  }
}
export default About;
