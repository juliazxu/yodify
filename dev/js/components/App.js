import React from 'react';
import Input from '../containers/input';
import YodifiedMessage from '../containers/output';
require('../../scss/style.scss');

const App = () => (
  <div id="app">
    <div>
      <img id="yoda" src={require('./../assets/yoda.svg')} />
    </div>
    <h1>Yodify your sentence</h1>
    <YodifiedMessage />
    <Input />
  </div>
);

export default App;
