import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

class Experience extends React.Component<{},{}> {
    render() {
        return (
          <PageWrapper subtitle="something" title="Experience">
            <div><p>child here</p>
            <ExperienceCard dateDetails='May 2019' jobTitle='Front-end developer+' jobType='Full time' CompanyName='RV echo'/>
            <ExperienceCard dateDetails='Sep 2018' jobTitle='Hackathon project'/>
                </div>
          </PageWrapper>
        )
      }
}
export default Experience