function MovieCard(props) {
    return (
     <div className="movie-card">
        <div className="left">
            <img alt="movie-poster" src={props.movie.Poster} />
        </div>
        <div className="right">
            <div className="title">{props.movie.title}</div>
            <div className="plot">{props.movie.Plot}</div>
            <div className="footer">
                <div className="rating">{props.movie.imdbRating}</div>
                <button className="favourite-btn">Add to favourite</button>
            </div>
        </div>
        
     </div>
    );
  }
  
  export default MovieCard;