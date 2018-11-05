import React, { Component } from 'react';
import withSearch from './withSearch';

class Cities extends Component {

  render() {
    const {filteredData} = this.props
    return (
        <div className="container">
            {
            filteredData &&
            filteredData.map( (city,idx) => <div key={`${idx}-${city}`} className="result-list">{city}</div>)
            }
        </div>
    );
  }

}

export default withSearch(Cities);
