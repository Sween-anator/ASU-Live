/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way.
*/

import React from 'react';
import { IndexLink } from 'react-router';
import { withCurrentUser, replaceComponent } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';



const CustomLogo = ({logoUrl, siteTitle, currentUser}) => {
  return (
    <div>
      <h1 className="logo-text"><IndexLink to="#"><img id="logo-img" src="packages/example-customization/lib/links/demoSite/images/asu.png" width="75" alt="ASU"/></IndexLink></h1>
      { currentUser ? <span className="logo-hello">Welcome {Users.getDisplayName(currentUser)} </span> : null}
    </div>


  )
}

replaceComponent('Logo', CustomLogo, withCurrentUser);
