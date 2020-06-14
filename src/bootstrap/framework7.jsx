import React from 'react';

import 'framework7/css/framework7.bundle.min.css';
// import 'framework7/css/framework7.css';

import 'framework7-icons';

import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
// import Framework7 from 'framework7/framework7.esm.js';
import Framework7React from 'framework7-react';

Framework7.use(Framework7React);

import { App } from 'framework7-react';

const f7params = {
  // Array with app routes

  // routes,
  theme: import.meta.env.SNOWPACK_PUBLIC_THEME || 'auto',

  // App Name
  name: import.meta.env.SNOWPACK_PUBLIC_APPNAME || 'Framework7 - Snowpack',

  // App id
  id: import.meta.env.SNOWPACK_PUBLIC_APPID || 'id.co.qumatic.app',
  // ...
};

export default function (props) {
  return (
    <App params={f7params}>
      {props.children}
    </App>
  )
}