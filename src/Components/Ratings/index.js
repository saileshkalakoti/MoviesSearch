import React from 'react';
import './index.css';

export default class Ratings extends React.Component {
  render() {
      return (
        <div className="rate">
         {<span><b>Ratings :</b></span>}{this.props.rate}
        </div>
      )
    }
    }