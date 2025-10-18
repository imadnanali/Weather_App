import React, { useState } from 'react'
import InfoBox from './InfoBox'
import Searchbox from './Searchbox'

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState(
    {
      city: "",
      feelsLike: 0,
      humidity: 0,
      temp: 0,
      tempmax: 0,
      tempmin: 0,
      weather: "",
    }
  )
  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo)
  }
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Weather App</h1>
      <Searchbox updateInfo={updateInfo}/><br />
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
