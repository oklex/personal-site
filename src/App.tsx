import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
// @ts-ignore
import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Experience from "./containers/Experience/Experience";
import Contact from "./containers/Contact/Contact";

interface AppState {
  modalContent: JSX.Element;
  modalShow: boolean;
}

class App extends React.Component<{}, AppState> {
  state = {
    modalContent: <div />,
    modalShow: false
  };

  loadHome = () => {
    return <Home />;
  };

  loadAbout = () => {
    return <About />;
  };

  loadSkills = () => {
    return <Skills />;
  };

  loadExperience = () => {
    return <Experience showModal={this.updateModal} />;
  };

  loadContact = () => {
    return <Contact />;
  };

  updateModal = (modalContents: JSX.Element, showModal: boolean) => {
    this.setState({
      modalShow: showModal,
      modalContent: (
          <div className="modal">
            <div className='modal-section'>
            <button className='close-btn' onClick={this.closeModal}><h3>close</h3></button>
            <div className='divider'></div>
            </div>
            <div className='modal-section'>
            <div className="modal-contents">{modalContents}</div>
            </div>
          </div>
      )
    });
  };

  closeModal = () => {
    this.setState({
      modalShow: false
    })
  }

  showModal = () => {
    console.log(this.state.modalContent)
    if (this.state.modalShow) {
      return this.state.modalContent
    }
    else {
      return <div></div>
    }
  }

  render() {
    return (
      <Router>
        <div id="app">
          <div id="Nav-section">
            <Navigation />
          </div>
          <div id="content">
            <Route exact path="/" component={this.loadHome} />
            <Route exact path="/about" component={this.loadAbout} />
            <Route exact path="/skills" component={this.loadSkills} />
            <Route exact path="/experience" component={this.loadExperience} />
            <Route exact path="/contact" component={this.loadContact} />
          </div>
          <div id='right-side'>
            {this.showModal()}
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
