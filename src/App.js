import React, {Component} from 'react';
import GetUsers from './components/users/getUsers';

export default class App extends Component {
  render () {
    return (
      <div>
        <GetUsers />
      </div>
    );
  }
}