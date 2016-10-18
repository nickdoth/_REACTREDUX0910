'use strict';

import React from 'react';

require('styles/util/SlideIn.css');

class SlideInComponent extends React.Component {
  render() {
    return (
      <div className="slidein-component">
        Please edit src/components/util//SlideInComponent.js to update this component!
      </div>
    );
  }
}

SlideInComponent.displayName = 'UtilSlideInComponent';

// Uncomment properties you need
// SlideInComponent.propTypes = {};
// SlideInComponent.defaultProps = {};

export default SlideInComponent;
