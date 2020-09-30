import React from 'react';

const DisplayImage = (props) => {

    return (

        <div className="flexDiv">
            <img src={props.url} alt={props.alt_description}/>
            <p>Photo by <a href={props.portfolio}>{props.user}</a> on <a href={props.siteUrl}>Unsplash</a></p>
        </div>

    );
}

export default DisplayImage;
