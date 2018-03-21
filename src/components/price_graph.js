import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { fetchHistory } from '../actions';
import _ from 'lodash';
import moment from 'moment';

class PriceGraph extends Component {
  componentDidMount() {
    this.props.fetchHistory();
  }

  renderHistory() {
    const data = _.map(this.props.data);
    console.log(data);
    const formattedData = data.map(e => ({
      date: moment.unix(+e.date).format('MM/DD/YYYY'),
      close: +e.close
    }));
    return formattedData;
  }

  render() {
    const data = this.renderHistory();
    console.log(data);

    return (
      <div className="container">
        <LineChart
          width={1100}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 5 }}
        >
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, { fetchHistory })(PriceGraph);
