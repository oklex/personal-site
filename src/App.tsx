import React from "react"
import "./App.scss"
import { BrowserRouter as Router, Route } from "react-router-dom"
// @ts-ignore
import Navigation from './components/Navigation/Navigation'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Skills from './containers/Skills/Skills'
import Experience from './containers/Experience/Experience'
import Contact from './containers/Contact/Contact'

class App extends React.Component<{}, {}> {
  loadHome = () => {
    return (
      <Home/>
    )
  };

  loadAbout = () => {
    return (
      <About/>
    )
  };

  loadSkills = () => {
    return (
      <Skills/>
    )
  };

  loadExperience = () => {
    return (
      <Experience/>
    )
  };

  loadContact = () => {
    return (
      <Contact/>
    )
  };

  render() {
    return (
      <Router>
        <div id="app" className='row'>
          <div id='nav-section' className='col-sm-1'><Navigation/>
            </div>
          <div id="content" className='col-md-11'>
            <Route exact path="/" component={this.loadHome} />
            <Route exact path="/about" component={this.loadAbout} />
            <Route exact path="/skills" component={this.loadSkills} />
            <Route exact path="/experience" component={this.loadExperience} />
            <Route exact path="/contact" component={this.loadContact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
