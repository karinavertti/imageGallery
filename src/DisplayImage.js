import React from 'react';

const DisplayImage = (props) => {

    return (
        // <div className="wrapper">
            // <div className="results">
                <div key={props.id}>
                    <img src={props.url} alt={props.alt_description}/>
                    <p>Photo by: {props.user}</p>
                </div>
            // </div>
        // </div>
    );
}

export default DisplayImage;