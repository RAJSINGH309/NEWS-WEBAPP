import React, { useState, useEffect } from "react";
import "./News.css";
import Media from "./Media";

const News = () => {
  const [inputSearch, setinputSearch] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  
  const [newsData, setnewsData] = useState([]);
  const defaultQuery = "current affairs";

  const getData = async () => {
    // getData gives fetch the data from api key and convert into json that is readable //
    const query = inputSearch.trim() === "" ? defaultQuery : inputSearch;
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    // console.log(jsonData.articles);
    setnewsData(jsonData.articles);
  };

  const handleInput = (e) => {
    // this function  give me the data of that value //
    // console.log(e.target.value);
    setinputSearch(e.target.value); //passing the value that enter in input field //
  };

  useEffect(() => {
    getData(); // fetch default news on page load
  }, []);

  const userInput = (e) => {
    // userinput is a funtion which trigger the value of category-btn to input //
    setinputSearch(e.target.value);
  };
  return (
    <div>
      <nav>
        <div className="top-navbar">
          <h1
            id="Name"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            GLOBAL NEXUS NEWS
          </h1>
          <div className="navbar-content">
            {" "}
            <input
              type="text"
              name="search"
              placeholder="search news"
              value={inputSearch}
              onChange={handleInput}
            />
            <button className="btn-style" onClick={getData}>
              search
            </button>
          </div>
        </div>
        <p style={{ fontWeight: "600", textAlign: "center", fontSize: "30px" }}>
          Stay Updated With Global Nexus News
        </p>
        <div className="news-category">
          <button className="category-btn" onClick={userInput} value="politics">
            Politics
          </button>
          <button
            className="category-btn"
            onClick={userInput}
            value="Economics"
          >
            Economics
          </button>
          <button className="category-btn" onClick={userInput} value="Defence">
            Defence
          </button>
          <button
            className="category-btn"
            onClick={userInput}
            value="Entertainment"
          >
            Entertainment
          </button>
          <button className="category-btn" onClick={userInput} value="Sports">
            Sports
          </button>
        </div>
      </nav>
      <div className="main">
        <Media data={newsData} />
      </div>
    </div>
  );
};

export default News;
