import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Searchbox.css'
import { useState } from 'react';

const Searchbox = ({ updateInfo }) => {

  let [city, setCity] = useState("");
  let [error, setError] = useState(false)
  const API_KEY = 'b98b9078a17db09cccc024db1f68cde4';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  let getWeatherinfo = async () => {
    try {
      let response = await fetch(API_URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempmin: jsonResponse.main.temp_min,
        tempmax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      }
      console.log(result)
      return result
    } catch {
      throw err;
    }
  }


  let handlerChange = (evt) => {
    setCity(evt.target.value)
  }

  let handlerSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city)
      setCity("")
      setError("")
      let newInfo = await getWeatherinfo();
      updateInfo(newInfo)
    } catch {
      setError(true)
    }
  }

  return (
    <div className='box'>
      <form onSubmit={handlerChange}>
        <TextField id="city" label="City Name*" variant="outlined" value={city} onChange={handlerChange} /><br /><br />
        <Button variant="contained" onClick={handlerSubmit}>Search</Button>
        {error && <p style={{ color: "red" }}>No such as place exists!</p>}
      </form>
    </div>
  )
}

export default Searchbox
