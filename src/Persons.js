import React, { Component } from "react";
import Person from "./Person";

class Persons extends Component {
  render() {
    const personDetails = this.props.values.map((details, id) => {
      return (
        <div>
          <Person key={details.id} {...details.person} />
          <button onClick={e => this.props.deletePerson(details.id)}>
            Delete child
          </button>
        </div>
      );
      //return <div key={id}>{details.person.name}</div>;
    });
    return <div>{personDetails}</div>;
  }
}

export default Persons;
