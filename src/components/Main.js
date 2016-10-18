require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from './supsing/Nav';
// import NavMenu from './supsing/NavMenu';
// import NavModal from './supsing/NavModal';
import NavItem from './supsing/NavItem';
import Navbar from './supsing/Navbar';

let yeomanImage: string = require('../images/yeoman.png');

interface State {
  count: number;
}

/**
 * @extends React.Component<{}, {count: number}>
 */
class AppComponent extends React.Component<{}, State> {

  constructor(props: {}, context) {
    super(props, context);
    this.state = {
      count: 0
    };
  }

  handleClick = (e) => {
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <div className="index">
        <Navbar position="fixed">
          <Nav subMode="click" pullRight>
            <NavItem viewName="ABCD" type="menu">
              <div onClick={this.handleClick}><a href="#">{"Clicked: " + this.state.count}</a></div>
              <div><a href="#">ECFGH</a></div>
              <div><a href="#">EFGH</a></div>
              <div><a href="#">EFGH</a></div>
              <div><a href="#">EFGH</a></div>
              <div><a href="#">EFGH</a></div>
            </NavItem>
            <NavItem viewName="ABCD2" type="menu">
              <div><a href="#">EFGH2</a></div>
            </NavItem>
            <NavItem viewName="框框" type="modal" modalWidth={200}>
              <legend>这就是一个框框</legend>
              <hr/>
              <div>点击<a href="#">此处</a>没有什么作用.</div>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
