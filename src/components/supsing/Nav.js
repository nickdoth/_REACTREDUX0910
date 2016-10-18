'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import assign from 'core-js/fn/object/assign';

require('styles/supsing/Nav.css');

export interface Props {
  onItemClick: Function;
  pullRight?: boolean;
}

interface State {
  activeItem: HTMLElement;
  navDisplay: boolean;
}

class Nav extends React.Component<Props, State> {
  state = { activeItem: null, navDisplay: false };
  context: { $activeItem: HTMLElement };

  handleNavClick = (e: React.UIEvent) => {
    let query = $(e.target).parents('li');
    // proceed if it is a <li> element
    if (query.length === 0) {
      this.updateState({ activeItem: null });
      return;
    }

    let node = query[0];
    
    if (node !== this.state.activeItem) {
      this.updateState({ activeItem: node });
    }
    else {
      // No closing modal when click on itself.
      if (node.getAttribute('data-itemtype') === 'modal') return;
      this.updateState({ activeItem: null });
    }
  };

  handleNavMousedown = (e) => {
    let query = $(e.target).parents('li');
    if (query[0] !== this.state.activeItem) {
      this.updateState({ activeItem: query[0] || null });
    }
  };

  handleDocumentAct = (e) => {
    let query = $(e.target).parents('.maple-nav');
    if (query[0] === ReactDOM.findDOMNode(this)) return;

    if (this.state.activeItem) {
      this.updateState({ activeItem: null });
    }
  }

  handleDocumentClick = this.handleDocumentAct;

  

  constructor(props, context) {
    super(props, context);
    // handle docuemnt.body.onclick
    $(document).click(this.handleDocumentClick);
  }

  getChildContext() {
    return {
      $activeItem: this.state.activeItem,
      $defaultSubAlign: this.props.pullRight ? 'right' : 'left'
    };
  }

  render() {
    return <ul className="maple-nav"
        style={{ float: this.props.pullRight ? 'right' : 'left' }}
        onClick={this.handleNavClick}>
        {this.props.children}
      </ul>;
  }

  componentWillUnmount() {
    $(document).off('click', this.handleDocumentClick);
  }

  updateState(assignment: {}) {
    this.setState(assign({}, this.state, assignment));
  }
}

Nav.displayName = 'SupsingNavComponent';
Nav.childContextTypes = {
  $activeItem: React.PropTypes.instanceOf(HTMLElement),
  $defaultSubAlign: React.PropTypes.string
};

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default Nav;
