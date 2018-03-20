import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions';
import _ from 'lodash';

class PriceInfo extends Component {
  componentDidMount() {
    this.props.fetchPrice();
  }

  renderPrice() {
    return _.map(this.props.price, price => {
      return <div key={_.random(0, 5)}>{price.amount}</div>;
    });
  }

  render() {
    return (
      <div className="container text-center">
        <div className="jumbotron">
          <h1 className="display-4">{this.renderPrice()}</h1>
          <p className="lead">This is the price of ethererum!</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { price: state.price };
}

export default connect(mapStateToProps, { fetchPrice })(PriceInfo);
