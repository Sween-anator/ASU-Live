import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = props => {
  return (
    <div className="footer"><a href="#" target="_blank"><p>ASU Live</p></a></div>
  )
}

Footer.displayName = "Footer";

registerComponent('Footer', Footer);
