import React from 'react';
import { IndexLink } from 'react-router';
import { withCurrentUser, replaceComponent } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import customer from

const CustomLogo = ({logoUrl, siteTitle, currentUser}) => {
  return (
    <div>
      <h1 className="logo-text"><IndexLink to="myCustomRoute">{siteTitle}</IndexLink></h1>
      { currentUser ? <span className="logo-hello">Welcome {Users.getDisplayName(currentUser)} </span> : null}
    </div>


  )
}

replaceComponent('Logo', CustomLogo, withCurrentUser);
