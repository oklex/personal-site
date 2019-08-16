import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

class Home extends React.Component<{},{}> {
    render() {
        return (
          <PageWrapper subtitle="something" title="Home">
            <p>child here</p>
          </PageWrapper>
        )
      }
}
export default Home