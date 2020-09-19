import React from 'react';
import './App.css';
import InputForm from './InputForm';
import PlaceTable from './PlaceTable';
import placeData from './examplePlaces';
import PlaceProfile from './PlaceProfile';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      places: placeData,
      currentSelection: null,
      currentIndex: null
    }
  }

  componentDidMount = () => {
    var url = '/places'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          places: data
        })
      });
  }

  checkState = () => {
    console.log(this.state);
  }

  addNewPlace = (searchState) => {
    var body = JSON.stringify(searchState);
    console.log(searchState)
    fetch('/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(
      fetch('/places')
      .then(response => response.json())
      .then(data => {
        this.setState({
          places:data
        });
      })
    );
  }

  
  onPlaceClick = (placeId) => {
    var currentPlaceIndex = null;
    var placesArray = this.state.places;
    for (var i = 0; i < placesArray.length; i++) {
      if (placesArray[i].id === Number(placeId)) {
        currentPlaceIndex = i;
      }
    }
    this.setState({
      currentSelection: placeId,
      currentIndex: currentPlaceIndex
    });
  }

  render() {
    var placeSelected = this.state.currentSelection;
    var currentPlaceIndex = this.state.currentIndex
    return (
      <div className="App">
        <header>
        {placeSelected ?
        <PlaceProfile placeData={this.state.places[currentPlaceIndex]}/>
        :
        <div>Click on a Place to see details</div> 
        }
        </header>
        <div>
          <PlaceTable onPlaceClick={this.onPlaceClick.bind(this)} placeData={this.state.places}/>
        </div>
        <div>
          <InputForm onButtonClick={this.addNewPlace}/>
        </div>
        {/* <button onClick={this.checkState}>Check state</button> */}

      </div>
    );
  }
}

export default App;
