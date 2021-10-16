import { useEffect, useState } from "react";
import {_cities} from "../lib/City";
import Select from "react-select";

const CitySearch = ({ selectedCity,setSelectedCity }) => {
  const [weatherCities, setWeatherCities] = useState([]);

  useEffect(() => {
    setWeatherCities(_cities);
  }, []);

  const selectCityHandle = (city) => {
    setSelectedCity(city.value);
  };

  return (
    <>
    <Select
        value={{
          value: selectedCity,
          label: selectedCity
        }}
        onChange={selectCityHandle}
        placeholder="Please select city..."
        options={weatherCities.map(x => {
          return{
            label: x.name,
            value: x.name
          }
        })}
    />
    </>
  );
};

export default CitySearch;
