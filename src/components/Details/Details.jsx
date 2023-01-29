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
        console.log(movieID);
        dispatch({ 
            type: 'GET_MOVIE', 
            payload: movieID 
        });
    }, [params.id]);

    // const captureDetails = (movie) =>{
    //     console.log('The selected movie was', movie)
    //     //collects info from movie and stores locally
        
    //     dispatch({ type: 'SET_DETAILS', payload: movie })
        
    // }


    return (
        <div>
            {details.map((movie) => {
                return (
                    <div>
                        <img src={movie.poster}/>
                        <p>{movie.description}</p>
                    </div>
                )
            })}

            <div>
            <button className='back'
                    onClick={ () => history.push('/')}
                    >Back</button>
            </div>
        </div>
    )

}


{/* <div key = {details.id}>
                <p>{details.title}</p>
                <img src ={details.poster}/>
            </div> */}

export default Details;