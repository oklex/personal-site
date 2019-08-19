import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { IExperienceCardDetails } from "../../components/ExperienceCard/ExperienceCard";

interface IExperienceState extends IExperienceCardDetails {}

interface IExperienceProps {
  showModal: (modalContent: JSX.Element, showModal: boolean) => void;
}

class Experience extends React.Component<IExperienceProps, IExperienceState> {
  getModalInfo = (details: IExperienceCardDetails) => {
    console.log(details);
    this.props.showModal(
      <div>
        <h3>
          <strong>{details.jobTitle}</strong>
        </h3>
        <p className="blue-text">{details.jobType}</p>
        <p>{details.jobDetails}</p>
      </div>,
      true
    );
  };

  render() {
    return (
      <div id="Experience">
        <div className="top-offset">
          <PageWrapper subtitle="Experience" title="Technical Experience">
            <div>
              <div className="spacer" />
              <ExperienceCard
                dateDetails="May 2019"
                jobTitle="Front-end developer+"
                jobType="Full time"
                CompanyName="RV echo (now poppy moving)"
                jobDetails={
                  <ul>
                    <li>
                      Built a REACT web-app in typescript, using bootstrap,
                      sass, and various APIs - including google APIs,
                      Cloudinary, and our custom back-end API.
                    </li>
                    <li>
                      Met UX design requirements by utilizing component
                      life-cycles and connecting with end-points to create an
                      MVP.
                    </li>
                    <li>
                      Proposed MVP product requirements alongside senior
                      development team by researching competitors, gathering
                      feedback, and writing brief documentation.
                    </li>
                  </ul>
                }
                callbackModal={this.getModalInfo}
              />
              <ExperienceCard
                dateDetails="Sep 2018"
                jobTitle="Hackathon projects"
                jobDetails={
                  <ul>
                    <li>
                      Won a Hackathon with a unique app to help manage and heal
                      PSTD.
                    </li>
                    <li>
                      Designed a voice interface on Amazon Echo for patients
                      that could maintain a basic mental health conversation and
                      record data such as voice tone, pitch, and speed for
                      comparison across time. 
                    </li>
                    <li>
                      Co-researched and wrote a white paper on PTSD related
                      therapy methodology and effects on family and coworkers -
                      with the goal of validating the app concept.
                    </li>
                    <li>
                      Designed and developed a persuasive landing page using
                      HTML and CSS for judges to better understand and explore
                      our concept.
                    </li>
                  </ul>
                }
                callbackModal={this.getModalInfo}
              />
              <ExperienceCard
                dateDetails="Sep 2015 - Apr 2019"
                jobTitle="School projects"
                jobDetails={
                  <div>
                    <strong>Text-based Multiplayer game - CMPT 213, SFU</strong>
                    <ul>
                      <li>
                        Developed a single-thread, text-based dungeon crawler
                        game in C++ alongside a team of 8 students by designing
                        around MVP requirements.
                      </li>
                      <li>
                        Defined the initial prototypes for project critical
                        “flows” such as log-in, switching avatars, travelling
                        across the map and interacting with NPCs through UML
                        cards.
                      </li>
                      <li>
                        Aided in the training of team members with differing
                        pre-requisite course backgrounds for usage of project
                        critical elements (specifically, class inheritance and
                        pointers).
                      </li>
                    </ul>
                    <strong>Castle Defense in Terminal - CMPT 276, SFU</strong>
                    <ul>
                      <li>
                        Created a “battleship” style game in Java with randomly
                        placed opponents to practice writing “clean” code.
                      </li>
                      <li>
                        Designed parent classes through CRC cards and UML
                        diagrams for efficient development.
                      </li>
                      <li>
                        Implemented design with attention to proper
                        encapsulation, packaged, and documentation that was
                        peer-reviewed positiively.
                      </li>
                    </ul>
                  </div>
                }
                callbackModal={this.getModalInfo}
              />
            </div>
          </PageWrapper>
          <div className="spacer" />
          <PageWrapper subtitle="Experience" title="Non-Technical Experience">
            <div>
              <div className="spacer" />
              <ExperienceCard
                dateDetails="Feb 2019 - Apr 2019"
                jobTitle="Marketing Intern"
                jobType="Part time"
                CompanyName="Greenline POS"
                jobDetails={
                  <ul>
                    <li>
                      Interviewed customers to develop SEO optimized case
                      studies, one of which became the top viewed page and
                      secured a business client within the week.
                    </li>
                    <li>
                      Researched competitors to propose some marketing
                      strategies and goals, one of which addressed the
                      diminishing returns on case studies
                    </li>
                    <li>
                      Helped manage clients' webservice/IT needs with regards to
                      web-branding and online stores.
                    </li>
                  </ul>
                }
                callbackModal={this.getModalInfo}
              />
              <ExperienceCard
                dateDetails="Jan 2018 - Apr 2018"
                jobTitle="Teaching Assistant"
                jobType="Part time"
                CompanyName="SFU, Beedie school of Business"
                jobDetails={
                  <ul>
                    <li>
                      Collaborated with an instructor to effectively review and
                      provide feedback on approximately 200 total written
                      reports over 4 months by discussing criteria and
                      encapsulating responsibilities.
                    </li>
                    <li>
                      Reviewed and predicted individual and class progress by
                      analyzing a total of approximately 4000 data points of
                      grading criteria, attendance, and participation to provide
                      feedback to the class instructor.
                    </li>
                    <li>
                      Provided feedback and advice to students through class
                      activities and office hours to improve their verbal and
                      written communication on their business idea pitch.
                    </li>
                  </ul>
                }
                callbackModal={this.getModalInfo}
              />
              <ExperienceCard
                dateDetails="Nov 2016 - Dec 2017"
                jobTitle="Secretary General"
                jobType="Part time"
                CompanyName="Connect Global Youth Association"
                jobDetails={
                  <ul>
                    <li>
                      Led the creation of an educational Model UN conference for
                      high school students by designing workflow processes for
                      marketing, IT, and various staff activities of hiring,
                      training, and editing research papers.
                    </li>
                    <li>
                      Budgeted several-thousand-dollars revenue by analyzing
                      statistics over 3 years to accommodate four-hundred Hotel
                      accommodations, equipment rentals, security, and other
                      costs.
                    </li>
                    <li>
                      Responded to, and worked with, a Board of Directors to
                      analyze progress and internal workings, and set major
                      progress milestones.
                    </li>
                    <li>
                      Managed and mentored a team of 6 main organizers and 55
                      staff members on various departments.
                    </li>
                    <li>
                      Addressed conduct issues ranging through missed deadlines,
                      and insufficient quality of work, by engaging in
                      non-judgmental and open discussions to resolve or
                      accommodate their struggles.
                    </li>
                    <li>
                      Managed critical events, such as opening/closing
                      ceremonies, and medical emergencies by tightly
                      coordinating a small team to evaluate and deliver
                      appropriate assistance.
                    </li>
                    <li>
                      Designed and coordinated a re-branding and marketing
                      initiative in-line with the Board of Director's needs.
                    </li>
                  </ul>
                }
                callbackModal={this.getModalInfo}
              />
              <ExperienceCard
                dateDetails="Aug 2016 - Apr 2017"
                jobTitle="Residence Advisor"
                jobType="Part time"
                CompanyName="SFU, Residence life"
                jobDetails={
                  <ul>
                    <li>
                      Performed on call shifts dealing with tense situations,
                      such as mental health crises, and physical assault by
                      responding quickly and calmly to de-escalate the
                      situation.
                    </li>
                    <li>
                      Planned various programs and events promoting mental
                      health awareness and management for students by creating
                      pamphlets, newsletters, and events to teach self-care and
                      self-management techniques.
                    </li>
                    <li>
                      Worked to develop a sense of community among students
                      living within residence, including a wide range of
                      international and domestic students.
                    </li>
                  </ul>
                }
                callbackModal={this.getModalInfo}
              />
            </div>
          </PageWrapper>
        </div>
      </div>
    );
  }
}
export default Experience;
