/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import NavItemComponent from 'components/supsing/NavItemComponent.js';

describe('NavItemComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(NavItemComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('navitem-component');
  });
});
