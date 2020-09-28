import React, { Component } from 'react';
import axios from 'axios';
import DisplayImage from './DisplayImage.js'
// import DropDown from './DropDown.js';

import './App.css';


// Pseudo code:
// User image class from dropdown
// Capture user input onChange
// Make API call with user input in query param
// Get results back
// Map over results and display
// Add a component to display the images
// User input and images go into state

// Stretch goals:
// Make an album from user's favourite photos using Firebase


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
          per_page: 12,
          orientation: 'squarish',
          format: 'json'
        }
      }).then((res) => {
        // Code to run after data comes back from API
        const smileImages = res.data.results;
        console.log(res.data.results);
        this.setState({
          images: smileImages,
        })
      })

    } 
    getImages(this.state.dropdownItem);
  }


  handleChange = (event) => {
    // user input data
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
            <option value="">...</option>
            <option value="puppies">Puppies</option>
            <option value="kittens">Kittens</option>
            <option value="flowers">Flowers</option>
            <option value="sunset">Sunset</option>
            <option value="ocean">Ocean</option>
        </select>
        </form>

        <div className="results">
        {this.state.images.map((displayImage) => {
        return (
            <DisplayImage 
            id={displayImage.id}
            url={displayImage.urls.regular}
            alt_description={displayImage.alt_description}
            user={displayImage.user.name}
            portfolio={displayImage.user.portfolio_url}
            siteUrl={'https://unsplash.com/'}
            />
            );
          })}
          </div>

      </div>
    );
  }
}

export default App;
