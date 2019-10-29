import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <div className="person-info">
          <ul>
            <li>
              <data>Name: {this.props.name}</data>
            </li>
            <li>
              <data>Favourite Movie: {this.props.hobby.movie}</data>
            </li>
            <li>
              <data>Favourite Sport: {this.props.hobby.sport}</data>
            </li>
            <li>
              <data>Favourite book: {this.props.hobby.book}</data>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Person;
