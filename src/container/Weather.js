import React,{useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import { WEATHER_QUERY } from "./Queries";
import WeatherCard from "./WeatherCard";
function Weather({ selectedCity }) {
  const WEATHER_INITIAL = {
    weather: {
      timestamp : "Loading...",
      temperature : {
        actual : 32
      },
      summary:{
        title:"Loading..."
      }
    }
  }
  const { loading,data } = useQuery(WEATHER_QUERY, {
    variables: { name: selectedCity },
  });
  const [weatherCities,setWeatherCities] = useState(WEATHER_INITIAL)
  useEffect(() => {
    if(data){
      setWeatherCities(data.getCityByName)
    }
  },[data])
  
  return (
    <>
      <WeatherCard weatherCities={weatherCities} loading={loading} />
    </>
  );
}
export default Weather;
