import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
    <div id="app">
        <h1>Yodify your sentence</h1>

        <img id="yoda" src={require('./../assets/yoda.svg')} />
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
