import React, { Component } from 'react';

class PriceGraph extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="jumbotron">
          <h1 className="display-4">Ethererum price graph</h1>
          <p className="lead">
            This is the price of ethererum in graph format!
          </p>
        </div>
      </div>
    );
  }
}

export default PriceGraph;
