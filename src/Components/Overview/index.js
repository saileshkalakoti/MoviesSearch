import React from 'react';
import './index.css';

export default class OverView extends React.Component {
    render() {
      return (
        <div className="contribution" onclick="document.getElementById('id01').style.display='block'">
         {<span>OverView :<br/></span>}{this.props.content}
        </div>
      
      )
    }
    }