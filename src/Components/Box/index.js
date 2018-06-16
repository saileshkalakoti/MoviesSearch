import React from 'react';
import './index.css';
import Name from '../Name';
import Picture from '../Picture';
import OverView from '../Overview';
import Date from '../Date';
import Ratings from '../Ratings';

export default class Box extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        id:this.props.it,
        details:[],
      }
    }
    componentDidMount() {
      console.log('\nInside fetching');
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d6b5abd1281b3030a82e8c4617beeed4`)
        .then((response) => response.json())
        .then(
          parsedJson => {
            this.setState({
              details: parsedJson,
              isLoading: false,
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
        console.log('\nFetching done')
    }
    render() {
      return (
        <div className="Rectangle-2">
          <Picture pic={(this.state.details).poster_path} />
          <Name name={(this.state.details).title} />
          <Ratings rate={(this.state.details).vote_average}/>
          <Date date={(this.state.details).release_date} />
          <OverView content={(this.state.details).overview} />
        </div>
      )
    }
    }