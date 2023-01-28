import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const details = useSelector(store => store.details);

    console.log('show me the deets', details);

    useEffect(() => {
        const movieID = params.id;
        dispatch({ 
            type: 'GET_MOVIE', 
            payload: movieID });
    }, []);

    // const captureDetails = (movie) =>{
    //     console.log('The selected movie was', movie)
    //     //collects info from movie and stores locally
        
    //     dispatch({ type: 'SET_DETAILS', payload: movie })
        
    // }


    return (
        <div>
            <header>
            <button className='back'
                    onClick={ () => history.push('/')}
                    >Back</button>
            </header>
            <div key = {details.id}>
                <p>{details.title}</p>
                <img src ={details.poster}/>
            </div>
        </div>
    )


}

export default Details;