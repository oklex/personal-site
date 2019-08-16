import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

class Contact extends React.Component<{}, {}> {
  render() {
    return (
      <PageWrapper subtitle="Contact" title="Get in touch">
        <p>
          email me:
          <a href="mailto:alexkim.347@gmail.com"> alexkim.347@gmail.com</a>
        </p>
        <p>
          call me:
          <a href="tel:7789858031"> 778.985.9031</a>
        </p>
        <p>
          Connect with me elsewhere:
          <a href="https://www.linkedin.com/in/akim-97/"> LinkedIn</a> 
          <a href="https://github.com/oklex">Github</a>
        </p>
      </PageWrapper>
    );
  }
}
export default Contact;
