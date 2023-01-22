import React from "react";
import "../styles/App.css";
import Forecasts from "../data/forecast.json";
import LocationDetails from "./LocationDetails";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails
        city={Forecasts.location.city}
        country={Forecasts.location.country}
      />
    </div>
  );
}

export default App;
