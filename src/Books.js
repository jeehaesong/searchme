import React, { Component } from 'react';
import withSearch from './withSearch';

class Books extends Component {

  render() {
    const {filteredData} = this.props
    return (
        <div className="container">
            {
            filteredData &&
            filteredData.map( (book,idx) => (
              <div key={`${idx}-${book}`} className="result-list">
                {`${book.title}`}
                <div className="result-extra-info">
                  {`${book.author}`}
                </div>
              </div>
            ))
            }
        </div>
    );
  }

}

export default withSearch(Books);
