import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

class Skills extends React.Component<{},{}> {
    render() {
        return (
            <div>
              <PageWrapper subtitle="Front-end skills" title="About">
                <p>My first area of expertise is in front-end development</p>
              </PageWrapper>
      
              <br />
              <PageWrapper subtitle="Back-end skills" title="About">
                <p>I'm actively learning</p>
              </PageWrapper>
      
              <br />
              <PageWrapper subtitle="Other skills" title="">
                <div>
                  <p>Object Oriented Design</p>
                  <p>Functional Programming</p>
                  <p>Material Design</p>
                </div>
              </PageWrapper>
            </div>
        )
      }
}
export default Skills