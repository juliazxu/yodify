import React from 'react';
import Input from './Input';
import Output from './Output';
require('../../scss/style.scss');

const App = () => (
  <div id="app">
    <div>
      <img id="yoda" src={'/assets/yoda.svg'} />
    </div>
    <h1>Yodify your sentence</h1>
    <Output />
    <Input />
  </div>
);

export default App;