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
            <ExperienceCard dateDetails='May 2019' jobTitle='Front-end developer+' jobType='Full time' CompanyName='RV echo (now poppy moving)' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Sep 2018' jobTitle='Hackathon projects' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Sep 2015 - Apr 2019' jobTitle='School projects' JobDetails={<p>children</p>}/>
                </div>
          </PageWrapper>
          <div className='spacer'></div>
          <PageWrapper subtitle="Experience" title="Non-Technical Experience">
            <div>
              <div className='spacer'/>
            <ExperienceCard dateDetails='Feb 2019 - Apr 2019' jobTitle='Marketing Intern' jobType='Part time' CompanyName='Greenline POS' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Jan 2018 - Apr 2018' jobTitle='Teaching Assistant' jobType='Part time' CompanyName='SFU, Beedie school of Business' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Nov 2016 - Dec 2017' jobTitle='Secretary General' jobType='Part time' CompanyName='Connect Global Youth Association' JobDetails={<p>children</p>}/>
            <ExperienceCard dateDetails='Aug 2016 - Apr 2017' jobTitle='Residence Advisor' jobType='Part time' CompanyName='SFU, Residence life' JobDetails={<p>children</p>}/>
                </div>
          </PageWrapper>
          </div>
        )
      }
}
export default Experience