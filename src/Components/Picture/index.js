import React from 'react';
import './index.css';

export default class Picture extends React.Component {
    constructor(props) {
    super(props)
    this.state={
      path:`https://image.tmdb.org/t/p/w500/`
    }
  }
  
  render() {
    return (
      <div>
        <img src={this.state.path+this.props.pic} className="pic" alt="movie-logo"/>
        {console.log('\nPath of image is '+this.state.path)}
    </div>
  
  
    )
  }
  }