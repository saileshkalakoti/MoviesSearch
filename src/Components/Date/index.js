import React from 'react'
export default class Date extends React.Component {
render() {
      return (
        <div className="rate">
         {<span>Release Date :</span>}{this.props.date}
        </div>
      )
    }
    }