import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Details() {
    const history = useHistory();
    const details = useSelector(store => store.details);
    console.log('show me the deets', details);

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