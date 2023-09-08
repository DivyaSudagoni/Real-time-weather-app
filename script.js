// an account is created on Open Weather Map site for API key 

//OpenWeatherMap API fetch code
let weather = {
    apiKey: "Enter key here",
  // The parameter inside the fetch weather function is city, as we have to type what city and it will look up 
  // for information for that particular city
    fetchWeather: function (city) {
      fetch(
  // API data is fetched as JSON format from the link below where units,city,appid parameters are used
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
  //response is caught using .then and some message when information is not found
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
  //  This function displays the data of weather  
    displayWeather: function (data) {
  // to get city name this is abstract the name from the object
      const { name } = data;
  // In the weather object from json data we used icon and description
      const { icon, description } = data.weather[0];
  // from main object, used temp and himidity
      const { temp, humidity } = data.main;
  // from wind, used speed to get wind speed
      const { speed } = data.wind;
      
  // querySelector for all the parameters used above 
      document.querySelector(".city").innerText = "Weather in " + name;
  // below is to display the icon of weather depending on location, link from Openweathermap is added for that reason
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      
  //Background change for each click on search, link is used from unsplash website
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    
  // this is going to get the content of the search bar
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  // an event listener is added for search button and it performs a function whenever clicked to search
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  //event listener for input box so when we press enter we get output of weather
  document
    .querySelector(".search-bar")
  // this function takes event as parameter 
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  // calling the function, when we load page, we can search for new location
  weather.fetchWeather("Denver");
  
  
  //Tween animation code used from Popmotion
  const {  tween, styler } = window.popmotion;
  //card class is passed as I want tween to work on the main portion of the body which is card class itself
  const divStyler = styler(document.querySelector('.card'));
  
  //the parameters passed to tween are from, to and duration.
  // the card class which contains all the information, this container rotates from right side of the screen 
  //on x-axis and stops at the center because of to:0 set to zero.
  tween({
    from: { x: 300, rotate: 180 },
    to: 0,
    duration: 1000,
    }).start(divStyler.set);