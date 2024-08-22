import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [city, setCity] = useState();
  const [weather, setWeather] = useState()

  const cityonchnge = (event) => {
    setCity(event.target.value)
  }


  const getWeather = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`cdb6a8cd9dc87377c1c838428d1615f8`}`);
      console.log(res.data);
      setWeather(res)

    } catch (error) {
      console.log(`erre ftcingh check the error `, error);

    }

  }
  const clickbtn = () => {
    getWeather()
  }
  return (<>
    <div className="App">
      <h1>Weather App</h1>
      <input type="text" placeholder='enter city name' value={city} onChange={cityonchnge} /><br />
      <button onClick={clickbtn}>Get Weather</button>

      {
        weather && <>
          <div>
            <h1>
              <b> {weather.data.name}</b>
            </h1>


            <span>{weather.data.weather[0].description}</span>
            <h4>Temp is: {weather.data.main.temp}</h4>
            <p>Humidity: {weather.data.main.humidity}%</p>
          </div>
         
          
        </>
      }

    </div>
  </>
  );

}

export default App;
