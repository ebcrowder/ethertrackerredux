import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AreaChart,
  Area,
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
    const formattedData = data.map(a => ({
      date: moment.unix(+a.date).format('M/DD'),
      close: _.ceil(+a.close, 2)
    }));
    return formattedData;
  }

  render() {
    const data = this.renderHistory();

    return (
      <div className="container">
        <AreaChart
          width={1100}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, { fetchHistory })(PriceGraph);
