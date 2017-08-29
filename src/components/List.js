import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMode: 'allTime',
      allTime: [],
      last30Days: []
    };
  }

  componentWillMount() {
    axios.all([this.getAllTimeCampers(),this.getLast30DaysCampers()])
      .then(axios.spread((allTime,recent) => {
        this.setState({
          allTime: allTime.data,
          last30Days: recent.data
        });
        console.log(this.state);
      }));
  }


  getAllTimeCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  }

  getLast30DaysCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }


  changeView(mode) {
    this.setState({currentMode: mode});
  }



  render(){
    var campers = this.state[this.state.currentMode];
    var isAllTimeActive;
    var isRecentActive;
    if(this.state.currentMode == 'last30Days'){
      isAllTimeActive = "notActive";
      isRecentActive= "active";
    }else{
      isAllTimeActive = "active";
      isRecentActive= "notActive";
    }

    return (<div>
      <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th className ={isAllTimeActive} onClick={() => this.changeView('allTime')}>All time</th>
        <th className ={isRecentActive} onClick = {() => this.changeView('last30Days')}> Last 30 days </th>
      </tr>
      </thead>
        <tbody>
          {
            campers.map((camper, index) => {
              return (<Item key={index} camper={camper} num={index+1}/>);
            })
          }
        </tbody>
      </table>
      </div>
    );
  }
}

export default List;
