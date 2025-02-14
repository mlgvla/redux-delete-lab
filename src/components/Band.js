import React, { Component } from 'react';

// will receive a band object from Bands component
class Band extends Component {

    handleClick = () => {
        this.props.deleteBand(this.props.band.id)
    }
  render() {
    return(
      <div>
            <li>{this.props.band.name}</li>
            <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
