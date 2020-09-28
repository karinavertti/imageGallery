import React from 'react';

const DropDown = (props) => {
    return (
        <form action="">
            <label forhtml="smile">Select what makes you smile:</label>
            <select name="smile" id="smile" onChange={this.handleChange} value={this.state.dropdownItem}>
                <option value="">...</option>
                <option value="puppies">Puppies</option>
                <option value="kittens">Kittens</option>
                <option value="flowers">Flowers</option>
                <option value="sunset">Sunset</option>
                <option value="ocean">Ocean</option>
            </select>
        </form>
    );
    
    // return (
    //     <div key={props.id}>
    //         <img src={props.url} alt={props.alt_description}/>
    //         <p>Photo by: {props.user}</p>
    //     </div>
    // );
}

export default DropDown;