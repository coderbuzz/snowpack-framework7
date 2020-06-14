import React from 'react';
import ReactDOM from 'react-dom';

import Bootstrap from './bootstrap/framework7';
import App from './components';

ReactDOM.render(
  <Bootstrap>
    <App />
  </Bootstrap>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
