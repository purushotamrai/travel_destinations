import React from 'react';
import DestinationItem from "./DestinationItem";

export default class DestinationList extends React.Component {

  render() {
    return (
      <div>
        <h1>Here are your best Travel Destinations</h1>
        <DestinationItem/>
      </div>
    );
  }
}
