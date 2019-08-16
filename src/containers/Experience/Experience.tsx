import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

class Experience extends React.Component<{},{}> {
    render() {
        return (
          <div>
          <PageWrapper subtitle="Experience" title="Technical Experience">
            <div>
              <div className='spacer'/>
            <ExperienceCard dateDetails='May 2019' jobTitle='Front-end developer+' jobType='Full time' CompanyName='RV echo' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Sep 2018' jobTitle='Hackathon project' JobDetails={<p>children</p>}/>
                </div>
          </PageWrapper>
          <div className='spacer'></div>
          <PageWrapper subtitle="Experience" title="Technical Experience">
            <div>
              <div className='spacer'/>
            <ExperienceCard dateDetails='May 2019' jobTitle='Front-end developer+' jobType='Full time' CompanyName='RV echo' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Sep 2018' jobTitle='Hackathon project' JobDetails={<p>children</p>}/>
                </div>
          </PageWrapper>
          </div>
        )
      }
}
export default Experience