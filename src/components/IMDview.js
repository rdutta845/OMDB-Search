import React, {Component} from 'react';
import Header from "./header";

class IMDview extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            imdData:{},
            imdbID: this.props.match.params.imdbID
        }
    }
    componentDidMount(){
        const {imdbID} = this.state;
        const apiUrl = "https://www.omdbapi.com/?i=" +imdbID +"&apikey=1ffd4fd6"
        fetch(apiUrl)
        .then(val => val.json())
        .then(data => {
            this.setState({imdData: data, isLoading: false});
        })
    }
    render(){
        const {imdData} = this.state;
        return(
            <React.Fragment>
                <Header />
                {this.state.isLoading && <div className="loader" >Loading.....</div>}
                {!this.state.isLoading && <div className="container">
                <img src={imdData.Poster} />
        <h1>{imdData.Title}</h1>
        <p>Released: {imdData.Released}</p>
        <p>Language: {imdData.Language}</p>
        <p>Genre: {imdData.Genre}</p>
        <p>BoxOffice: {imdData.BoxOffice}</p>
        <p>Awards: {imdData.Awards}</p>
        <p>Actors: {imdData.Actors}</p>
        <p>Writer: {imdData.Writer}</p>
        <p>IMD Rating: {imdData.imdbRating}</p>
        <p>IMD Votes: {imdData.imdbVotes}</p>
        <div>
            <p>Rating</p>
        {imdData.Ratings.map(val => <p><span>Source: {val.Source}</span> <span>Value: {val.Value}</span></p>)}
        </div>
                </div>}
            </React.Fragment>
        )
    }
}
export default IMDview;