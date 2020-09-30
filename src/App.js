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
      randomNumber: 1
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dropdownItem !== prevState.dropdownItem) {
      this.getImages(this.state.dropdownItem, this.state.randomNumber);
    }
  }

  getImages = (queryTerm, randomPage) => {
    const apiKey = "w_BCXG1arn8Umvl_4Qgbdp9T16jilc-Q7NGOHnSUp70";
    axios({
      method: 'GET',
      url: 'https://api.unsplash.com/search/photos',
      dataResponse: 'json',
      // stuff that goes after the question mark (query parameters)
      params: {
        client_id: apiKey,
        query: queryTerm,
        page: randomPage,
        per_page: 12,
        orientation: 'squarish',
        format: 'json'
      }
    }).then((res) => {
      console.log(res);
      // Code to run after data comes back from API
      const smileImages = res.data.results;
      console.log(res.data.results);
      this.setState({
        images: smileImages,
      })
    })

  } 

  randomPage = () => {
    return Math.floor(Math.random() * 5) + 1 
  }
  

  handleChange = (event) => {
    // user input data
    const randomNumber = this.randomPage();
    this.setState({
      dropdownItem: event.target.value,
      randomNumber: randomNumber
    });
    
    }

  render() {
    console.log(this.randomPage());
  return (
      <div className="App">
        
        <div class="wrapper">
          <h1>Take a break and smile!</h1>
          
          {/* <DropDown/> */}
  
          <form>
            <label forhtml="smile">Select what makes you smile:</label>
            <select name="smile" id="smile" onChange={this.handleChange} value={this.state.dropdownItem}>
              <option className="select" value="">Please select an option</option>
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
              key={displayImage.id}
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

        <footer>
        <p>Copyright © 2020 Karina Vertti | <a href="https://junocollege.com/" target="blank">Created at Juno
                College</a></p>
        </footer>

      </div>
    );
  }
}

export default App;
