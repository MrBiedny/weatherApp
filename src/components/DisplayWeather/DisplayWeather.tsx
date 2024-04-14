import axios from "axios";
import { useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { RiWindyLine } from "react-icons/ri";

import { RiLoader2Fill } from "react-icons/ri";

import { MainWrapper } from "./weather.module";
import { API_ENDPOINT, API_KEY, CALC_WIND_SPEED } from "../../ConstData";
import { WeatherDataProps } from "../../WeatherDataProps";
import { iconChanger } from "../IconChanger";

export default function DisplayWeather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchCity, setSearchCity] = useState<string>("");

  const fetchCurrentWeather = async function (lat: number, lon: number) {
    const url = `${API_ENDPOINT}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const res = await axios.get(url);
    return res.data;
  };

  const fetchWeatherData = async function (city: string) {
    try {
      const url = `${API_ENDPOINT}weather?q=${city}&appid=${API_KEY}&units=metric`;
      const res = await axios.get(url);
      const searchResult: WeatherDataProps = res.data;
      return { searchResult };
    } catch (error) {
      alert("No data");
      throw error;
    }
  };

  const handleSearch = async function () {
    if (searchCity.trim() === "") {
      return;
    }
    try {
      const { searchResult } = await fetchWeatherData(searchCity);
      setWeatherData(searchResult);
      setSearchCity("");
    } catch (error) {
      alert("No results found");
    }
  };

  const handleKeyDown = function (
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(function () {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      Promise.all([fetchCurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
          setIsLoading(true);
        }
      );
    });
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input
            type="text"
            placeholder="Enter a city"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
          </div>
        </div>

        {weatherData && isLoading ? (
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">
                {iconChanger(weatherData.weather[0].main)}
              </div>
              <h2>{Math.round(weatherData.main.temp)}°C</h2>
              <h3>{weatherData.weather[0].main}</h3>
            </div>

            <div className="bottomInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind">
                <RiWindyLine className="windIcon" />
                <div className="humidInfo">
                  <h1>
                    {Math.round(weatherData.wind.speed * CALC_WIND_SPEED)} km/h
                  </h1>
                  <p>Wind speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <RiLoader2Fill className="loadingIcon" />
            <p>Loading...</p>
          </div>
        )}
      </div>
    </MainWrapper>
  );
}
