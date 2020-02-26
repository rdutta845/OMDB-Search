import React from 'react';

function Card(props){
    const {Title, Type, Year, Rated, imdbRating, Poster, imdbID} = props.data;
    const moveToPage = (val)=>{
        props.history.push(`/${val}`);
    }
    return(
    <div className="card-section" onClick={moveToPage.bind(this, imdbID)}>
        <div className="image-section">
            <img src={Poster} />
        </div>
        <div className="info-section">
            <h3>{Title}</h3>
            <span>Type: {Type}</span>
            <span className="right">Year: {Year}</span>
            <span>Rated: {Rated}</span>
            <span className="right">Rating: {imdbRating}</span>
        </div>
    </div>
    )
}
export default Card;