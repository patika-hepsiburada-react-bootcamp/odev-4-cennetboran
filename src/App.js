import "./App.css";
import Weather from "./container/Weather";
import CitySearch from "./container/CitySearch.js";
import { useState } from "react";

const App = function App() {
  const [selectedCity, setSelectedCity] = useState("izmir");

  return (
    <div className="App">
      <CitySearch
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Weather selectedCity={selectedCity} />
    </div>
  );
};

export default App;
