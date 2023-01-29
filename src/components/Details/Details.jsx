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
        //dispatch to get the specific movieID's details
        dispatch({ 
            type: 'GET_MOVIE', 
            payload: movieID 
        });
    }, [params.id]);

//details rendered to show the description and genre of the selected movie
    return (
        <div>
            {details.map((details, index) => {
                return (
                    <div key={index}>
                        <img src={details.poster}/>
                        <p>{details.title}</p>
                        <p>{details.genres}</p>
                        <p>{details.description}</p>

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
//Back button to push you back to the main page


export default Details;