import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

class About extends React.Component<{},{}> {
    render() {
        return (
          <PageWrapper subtitle="something" title="About">
            <p>child here</p>
          </PageWrapper>
        )
      }
}
export default About