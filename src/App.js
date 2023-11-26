import { useState } from "react";
import "./App.css";

const api = {
  key: "fd2ec02edf8f223e8e42391561f17978",//You can use your own api key here from openWeatherMap
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>DHIS2 Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            <div>
            {/* Location  */}
            <label>City name:</label>
            <p>{weather.name}</p>
            </div>
            <div>
            {/* Temperature Celsius  */}
            <label>Temperature info:</label>
            <p>{weather.main.temp}°C</p>
            </div>
            <div>
            {/* Humidity */}
            <label>Humidity Info:</label>
            <p>{weather.main.humidity}</p>
            </div>

            <div>
            {/* Condition (Sunny ) */}
            <label>Condition info:</label>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
