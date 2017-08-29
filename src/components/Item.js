import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
      <tr>
        <td>{this.props.num}</td>
        <td>
        <img src={this.props.camper.img} />
        <span>{this.props.camper.username}</span>
        </td>
        <td>{this.props.camper.alltime}</td>
        <td>{this.props.camper.recent}</td>
      </tr>

    );
  }
}

export default Item;
