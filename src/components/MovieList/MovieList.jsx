import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const captureDetails= (movie) =>{
        console.log('The selected movie was', movie)
        //navigates to details page
        history.push(`/details/${movie.id}`);
    }


    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div 
                        className= "card"
                        key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                            src={movie.poster} 
                            alt={movie.title}
                            onClick={ () => captureDetails(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;