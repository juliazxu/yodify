import React from 'react';
import Input from '../containers/input';
import Output from '../containers/output';
require('../../scss/style.scss');

const App = () => (
  <div id="app">
    <div>
      <img id="yoda" src={require('./../assets/yoda.svg')} />
    </div>
    <h1>Yodify your sentence</h1>
    <Input />
    <Output />
  </div>
);

export default App;
