import React, { Component } from 'react';
import $ from 'jquery';
import assign from 'core-js/fn/object/assign';

interface State {
  navDisplay: boolean;
  shouldReact: boolean
}

interface Props {
  position: 'static' | 'fixed';
}

export default class Navbar extends Component<Props, State> {
  constructor(props, context) {
    super(props, context);
    $(window).on('resize', this.handleSize);
  }

  state = {
    navDisplay: false,
    shouldReact: document.body.offsetWidth < 992
  };

  navToggle = () => {
    this.updateState({
      navDisplay: !this.state.navDisplay
    });
  }

  handleSize = () => {
    var shouldReact = document.body.offsetWidth < 992;
    console.log('shouldReact', shouldReact);
    if (shouldReact !== this.state.shouldReact)
      this.updateState({ shouldReact });
  }

  render() {
    var display = this.state.navDisplay || !this.state.shouldReact;
    return (
      <div className="maple-nav-collapse maple-navbar" style={{position: this.props.position, width: '100%'}}>
        <div className="nav-toggle-btn" onClick={this.navToggle}>
          <span>↓</span>
        </div>
        <div style={{ 'display': display ? 'block' : 'none' }}>
          {this.props.children}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    $(window).off('resize', this.handleSize);
  }

  updateState(assignment: {}) {
    this.setState(assign({}, this.state, assignment));
  }
}