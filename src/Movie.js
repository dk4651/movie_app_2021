 import React from 'react';
 import PropTypes from 'prop-types';
 import "./Movie.css";

 function Movie({id, year, title, summary, poster, genres} ){
    return (
      <div className = "movie">
         
         <img src = {poster} alt = {title} name = {title} />

         <div className = "movie_data"> 
            <h3 className = "movie__title">{title}</h3>
            {genres.map((list,index) => (<ul key = {index} className ="movie__genres"><li>{list}</li> </ul>))}
            <h5 className = "movie__year">{year}</h5>
            <p className = "movie__summary">{summary}</p>

         </div>
         
      </div>
      
    )
   
   }

 Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
 }

 export default Movie;