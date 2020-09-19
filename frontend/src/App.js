import React from 'react';
import './App.css';
import InputForm from './InputForm';
import PlaceTable from './PlaceTable';
import placeData from './examplePlaces';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      places: placeData,
      currentSelection: null
    }
  }

  onPlaceClick = (placeId) => {
    this.setState({
      currentSelection: placeId
    });
    console.log(this.state.currentSelection);
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <div>
          <InputForm />
        </div>
        <div>
          <PlaceTable onPlaceClick={this.onPlaceClick.bind(this)} placeData={this.state.places}/>
        </div>

      </div>
    );
  }
}

export default App;
