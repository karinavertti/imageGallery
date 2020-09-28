import React from 'react';

const DropDown = (props) => {
    return (
        <form action="">
            <label forhtml="animal">Choose your animal:</label>
            <select name="animal" id="animal" onChange={this.handleChange} value={this.state.dropdownItem}>
                <option value="monkey">Monkeys</option>
                <option value="eagle">Eagles</option>
                <option value="dragon">Dragons</option>
                <option value="elephant">Elephants</option>
                <option value="centaur">Centaurs</option>
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