import React from 'react'
export default class Date extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <div className="rate">
         {<span>Release Date :</span>}{this.props.date}
        </div>
      )
    }
    }