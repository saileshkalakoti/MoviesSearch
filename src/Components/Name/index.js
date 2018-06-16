import React from 'react';
import './index.css';

export default class Name extends React.Component {
    render() {
      return (
        <div className="name">
    {<span>Name :</span>}{this.props.name}
        </div>
      )
    }
}