import React from 'react';

const DisplayImage = (props) => {

    return (

                <div key={props.id} className="flexDiv">
                    <img src={props.url} alt={props.alt_description}/>
                    {/* <p>Photo by: {props.user}</p> */}
                    <p>Photo by <a href={props.portfolio}>{props.user}</a> on <a href={props.siteUrl}>Unsplash</a></p>
                </div>

    );
}

export default DisplayImage;

// Photo by <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>