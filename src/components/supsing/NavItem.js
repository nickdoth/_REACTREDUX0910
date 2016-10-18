'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import classnames from 'classnames';

require('styles/supsing/NavItem.css');

interface Props {
  viewName: string;
  type: 'menu' | 'modal';
  modalWidth: number;
  subAlign: 'left' | 'right';
}

class NavItem extends React.Component<Props, {}> {
  node: HTMLElement;
  props = {
    viewName: '',
    type: 'menu',
    modalWidth: 0,
    subAlign: undefined
  };

  render() {
    let props = this.props;
    let isActive = this.node === this.context.$activeItem;
    let subClsName = classnames('supsing-sub', {
      'sub-menu': this.props.type === 'menu',
      'sub-modal': this.props.type === 'modal'
    });

    let innerClsName = classnames('sub-inner', {
      'bg-default': this.props.type === 'menu',
      'bg-white': this.props.type === 'modal'
    });

    console.log('SupsingNavItemComponent.render')

    return (
      <li className={isActive ? 'active' : ''} data-itemtype={props.type}>
        <a href="javascript:void(0)">
          {props.viewName}
        </a>
        <div className={subClsName} style={this.subStyle(isActive)}>  
          <div className={innerClsName} style={{'padding': 'left'}}>
            {props.children}
          </div>
        </div>
      </li>
    );
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }

  subStyle(isActive) {
    var subAlign = this.props.subAlign ? this.props.subAlign : this.context.$defaultSubAlign;
    return {
      display: isActive ? 'block' : 'none',
      width: this.props.type === 'modal' ? this.props.modalWidth : null,
      [subAlign]: '0px'
    };
  }
}

NavItem.displayName = 'SupsingNavItemComponent';
NavItem.contextTypes = {
  $activeItem: React.PropTypes.instanceOf(HTMLElement),
  $defaultSubAlign: React.PropTypes.string
};

// Uncomment properties you need
// NavItemComponent.propTypes = {};
// NavItemComponent.defaultProps = {};

export default NavItem;
