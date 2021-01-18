import React ,{Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron
} from 'reactstrap';

class Header extends Component {

  render() {

    return(
      <React.Fragment>
        <Navbar >
          <div className="container">
            <NavbarBrand className="mr-auto">
              <img src="JL logo single.png" height="60" width="75"alt="Jonathan Lowery"/>
            </NavbarBrand>
            <Nav>
              <NavItem >
                <NavLink className="nav-link">Placeholder</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h2>Web Developer and a Gentleman</h2>
                <p>I specialize in building responsive web and native applications using React and React-Native. On the front-end I work with Javascript in combination with Bootstrap, Redux and jQuery. On the back-end I have knowledge of REST, Node.JS and MongoDB.</p>
              </div>
              <div className="col-12 col-sm-6">
                <img src="Jon2.png" height="300" className="mx-auto d-block" alt="My Photo"/>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );


  }
}

export default Header;
