import React, { Component } from 'react';
import Header from './header';
import List from './List';


export default class App extends Component {
  render() {
    return (<div>
      <h3 className=" header">FCC Campers Leaderboard</h3>
      <List/>
      </div>
    );
  }
}
