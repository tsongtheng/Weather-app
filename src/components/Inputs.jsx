import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleKeyDown = (e) => {
    if (city && e.key === "Enter") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6 max-sm:flex-col max-sm:gap-3">
      <input
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search for city...."
        className="text-xl font-light py-2 px-4 w-full rounded-md shadow-xl focus:outline-none capitalize placeholder:lowercase"
      ></input>

      <div className="flex flex-row gap-1 w-3/4 items-center max-sm:justify-start justify-evenly space-x-4">
        <UilSearch
          size={23}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={23}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />

        <div className="flex">
          <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>

          <button
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
