/*
A new custom page just for our app.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router';

const MyCustomPage = () => {
  return (
    <div>
      <h1>Link to ASU Live.</h1>

    </div>
  )
}

registerComponent('MyCustomPage', MyCustomPage);
