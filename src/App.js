import React, { Component } from 'react';
import axios from 'axios';
import DisplayImage from './DisplayImage.js'
// import DropDown from './DropDown.js';

import './App.css';


// Pseudo code:
// User selects calming image from dropdown
// Capture user input onChange
// Make API call with user input in query param
// Get results back
// map over results and display
// add what goes in components (suggest the dropdown)
// what goes in state (suggest userInput and images)

// Display artwork on the page
class App extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      dropdownItem: '',
    }
  }

  componentDidUpdate() {
    // Make an API call
    const apiKey = "w_BCXG1arn8Umvl_4Qgbdp9T16jilc-Q7NGOHnSUp70";
    const getImages = (queryTerm) => {
      axios({
        method: 'GET',
        url: 'https://api.unsplash.com/search/photos',
        dataResponse: 'json',
        // stuff that goes after the question mark (query parameters)
        params: {
          client_id: apiKey,
          query: queryTerm,
          per_page: 10,
          orientation: 'squarish',
          format: 'json'
        }
      }).then((res) => {
        // Code to run after data comes back from API
        const smileImages = res.data.results;

        this.setState({
          images: smileImages,
        })
      })

    } 
    getImages(this.state.dropdownItem);
  }


  handleChange = (event) => {
    console.log(event.target.value);  // user input data

    this.setState({
      dropdownItem: event.target.value
    });
    
    }

  render() {
  return (
      <div className="App" className="wrapper">
        
        <h1>Take a break and smile!</h1>
        
        {/* <DropDown/> */}

        <form action="">
          <label forhtml="smile">Select what makes you smile:</label>
          <select name="smile" id="smile" onChange={this.handleChange} value={this.state.dropdownItem}>
            <option value="puppies">Puppies</option>
            <option value="kittens">Kittens</option>
            <option value="flowers">Flowers</option>
            <option value="sunset">Sunset</option>
            <option value="ocean">Ocean</option>
        </select>
        </form>

        {this.state.images.map((displayImage) => {
        return (
          <div class="results">
            <DisplayImage 
            id={displayImage.id}
            url={displayImage.urls.regular}
            alt_description={displayImage.alt_description}
            user={displayImage.user.name}
            />
          </div>

        );
      })}

      </div>
    );
  }
}

export default App;
