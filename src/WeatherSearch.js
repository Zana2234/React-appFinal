import React, { useState } from "react";
import "./styles.css";
export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20º in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <>
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={changeCity} />
          <input type="submit" value="Search" />
        </form>
        <h2>{message}</h2>
      </div>
      <div className="GithubLink">
        <span>
          <a
            href="https://github.com/Zana2234/React-appFinal.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by{" "}
          <a
            href="https://github.com/Zana2234"
            target="_blank"
            rel="noreferrer"
          >
            Ana Zabaleta
          </a>
        </span>
      </div>
    </>
  );
}
