import React from 'react';
import './index.css'
import Search from './Search.js'
import Box from './Components/Box'
class Rectangle extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: false,
      count:null,
    }
    this.onValChange = this.onValChange.bind(this);
    this.onGoClick = this.onGoClick.bind(this);
  }

  onValChange(id)
  {
    this.componentDid(id);
    this.setState({
      isLoading : true
     });
  } 
  onGoClick(id)
  {
   this.componentDid(id);
   this.setState({
    isLoading : false,
    });
  }
  componentDid(id) {
    this.setState({
      items:[],
    })
    if(id==='')
    return;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6b5abd1281b3030a82e8c4617beeed4&query=${id}`)
      .then((response) => response.json())
      .then(
        parsedJson => {
          this.setState({
            items: parsedJson.results,
            isLoading: false,
            count:parsedJson.total_results,
          });
        })
      .catch(
        (error) => {
          this.setState({
            error,
            isLoading: false
          });
        }
      )
    }

  renderBox(_id) {
    return (<Box it={_id} />);
  }
  render() {

     return (
     
      <div className="Rectangle-3">
        <div className="Div1" >
           </div>

        <Search onValueChange={this.onValChange} onGoClick={this.onGoClick} />
        {this.state.count===0?<div className="warning"><center>No results Found</center></div>:
        <div className="Div3">
            {
              this.state.items.map(item => (
                this.renderBox(item.id)
              ))
            }
           </div>
          }
        
      </div>
    )
  }
}
export default Rectangle;