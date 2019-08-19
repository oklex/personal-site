import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

class Skills extends React.Component<{}, {}> {
  render() {
    return (
      <div className='top-offset'>
        <PageWrapper subtitle="Front-end skills" title="REACT, sass, ts">
          <p>My first area of expertise is in front-end development</p>
          <div className="spacer" />
          <div className="divider" />
        </PageWrapper>
        <div className="spacer" />
        <PageWrapper subtitle="Back-end skills" title="Node js, express, knex">
          <p>I'm actively learning</p>
          <div className="spacer" />
          <div className="divider" />
        </PageWrapper>

        <div className="spacer" />
        <PageWrapper subtitle="Other skills" title="">
          <div>
            <p>Object Oriented Design</p>
            <p>Functional Programming</p>
            <p>Material Design</p>
          </div>
        </PageWrapper>
      </div>
    );
  }
}
export default Skills;
