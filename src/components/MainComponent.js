import React, {Component} from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Bio from "./BioComponent";
import Projects from "./ProjectComponent";


class Main extends Component{

  render() {

    return (
      <div>
        <Header />
        <Bio/>
        <Projects/>
      </div>
    );
  }
}

export default Main;
