import * as React from 'react';

let AddChirp = (props) => {
    return (
        <>
            <div className="card m-4 shadow">
                <div className="card-body">
                    <h5 className="card-title">{props.chirp.username}</h5>
                    <p className="card-text">{props.chirp.message}</p>
                </div>
            </div>
        </>
    )
}

export default AddChirp