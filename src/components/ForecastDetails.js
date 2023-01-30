import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  return (
    <div className="forecast-details">
      <h2>Date: {formattedDate} </h2>
      <p>
        <span className="bold">Max Temperature:</span>{" "}
        {forecast.temperature.max}&deg;C
      </p>
      <p>
        <span className="bold">Min Temperature:</span>{" "}
        {forecast.temperature.min}&deg;C
      </p>
      <p>
        <span className="bold">Humidity:</span> {forecast.humidity}%
      </p>
      <p>
        <span className="bold">Wind:</span> {forecast.wind.speed}mph
      </p>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
