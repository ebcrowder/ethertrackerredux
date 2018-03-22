import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions';
import _ from 'lodash';
import moment from 'moment';

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
      <div className="container text-center bg-dark">
        <div className="jumbotron bg-info text-white">
          <h1 className="display-4">{this.renderPrice()}</h1>
          <p className="lead">Ethereum in USD</p>
          <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { price: state.price };
}

export default connect(mapStateToProps, { fetchPrice })(PriceInfo);
