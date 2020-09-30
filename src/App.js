import React, { Component } from 'react';
import axios from 'axios';
import DisplayImage from './DisplayImage.js'

import './App.css';


// My lovely state
class App extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      dropdownItem: '',
      randomNumber: 1,
      coverImage: null
    }
  }

  // API call for landing page image
  componentDidMount() {
    const apiKey = "w_BCXG1arn8Umvl_4Qgbdp9T16jilc-Q7NGOHnSUp70";
    axios({
      method: 'GET',
      url: 'https://api.unsplash.com/photos/random',
      dataResponse: 'json',
      params: {
        client_id: apiKey,
        orientation: 'portrait',
        format: 'json'
      }
    }).then((res) => {
      const coverImage = res.data;
      this.setState({
        coverImage: coverImage
      })
    })
  }


  componentDidUpdate(prevProps, prevState) {
    // If dropdown selection changes, select a random page from query to display
    if (this.state.dropdownItem !== prevState.dropdownItem) {
      this.getImages(this.state.dropdownItem, this.state.randomNumber);
    }
  }

  // API call with user input in query param
  getImages = (queryTerm, randomPage) => {
    const apiKey = "w_BCXG1arn8Umvl_4Qgbdp9T16jilc-Q7NGOHnSUp70";
    axios({
      method: 'GET',
      url: 'https://api.unsplash.com/search/photos',
      dataResponse: 'json',
      params: {
        client_id: apiKey,
        query: queryTerm,
        page: randomPage,
        per_page: 12,
        orientation: 'squarish',
        format: 'json'
      }
    }).then((res) => {
      const smileImages = res.data.results;
      this.setState({
        images: smileImages,
      })
    })
  } 
  // Randomizer
  randomPage = () => {
    return Math.floor(Math.random() * 5);
  }
  
  // Handle user input onChange
  handleChange = (event) => {
    const randomNumber = this.randomPage();
    this.setState({
      dropdownItem: event.target.value,
      randomNumber: randomNumber
    });
    }

  render() {
  return (
      <div className="App">
        
        <div className="wrapper">
          <h1>Take a break and smile!</h1>

          {/* Dropdown menu */}
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
            {this.state.images.length < 1 ? (
              <div className="discover">
                {this.state.coverImage ?
                <DisplayImage 
                  key={this.state.coverImage.id}
                  url={this.state.coverImage.urls.regular}
                  alt_description={this.state.coverImage.alt_description}
                  user={this.state.coverImage.user.name}
                  portfolio={this.state.coverImage.user.portfolio_url}
                  siteUrl={'https://unsplash.com/'}
                /> : null }
                </div>  
            ):   
            this.state.images.map((displayImage) => {
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
