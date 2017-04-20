/*
A new custom route for our custom page.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import { addRoute, getComponent } from 'meteor/vulcan:core';
import MyCustomPage from './components/twitterInsta.jsx';
//import asu from './components/index.html';
//import twitter from 'links/test.html';


addRoute({name: "twitterInsta", path: "/twitter-insta", component: getComponent("MyCustomPage")});
//addRoute({name: "twitterRoute", path: "/feed-route", component: getComponent("FeedRoute")});
