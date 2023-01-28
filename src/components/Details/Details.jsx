import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

function Details() {
    const history = useHistory();
    const dispatch = useDispatch();
    const detail = useSelector(store => store.details);

    console.log('show me the deets', movie);

    useEffect(() => {
        dispatch({ type: 'GET_MOVIE', payload: movie });
    }, []);

    const captureDetails = (movie) =>{
        console.log('The selected movie was', movie)
        //collects info from movie and stores locally
        
        dispatch({ type: 'SET_DETAILS', payload: movie })
        
    }


    return (
        <div>
            <header>
            <button className='back'
                    onClick={ () => history.push('/')}
                    >Back</button>
            </header>
            <h3>Movie Details:</h3>
            <ul>
                {Array.from(detail).map((detail) =>{
                    return <li key={detail.id}>
                        {detail.id}
                        {detail.title}
                        {detail.description}
                        {detail.poster}
                        {detail.name}
                        <img src ={detail.poster}/>
                    </li>
                })}
            </ul>

        </div>

    )

    // return (
    //     <div>
    //         <header>
    //         <button className='back'
    //                 onClick={ () => history.push('/')}
    //                 >Back</button>
    //         </header>
    //         <div key = {details.id}>
    //             <p>{details.title}</p>
    //             <img src ={details.poster}/>
    //         </div>
    //     </div>
    // )


}

export default Details;