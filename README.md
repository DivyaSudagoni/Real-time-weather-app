# Real-time-weather-app
# PROJECT API

In this project, I have used OpenWeatherMap API combined with Google Maps Places API and the popmotion animation used was Tween. We can search for any place in the search bar for the real time weather data where the places suggestions are auto populated using Google Maps Places API with autocomplete feature.

[OpenWeatherMap API link](https://openweathermap.org/api)

[Google Maps Places API link](https://console.cloud.google.com/apis/library/places-backend.googleapis.com)

[Tween animation link](https://popmotion.io/api/tween/)

## HOW THE DATA IS FETCHED ?

1. ### OpenWeatherMap API call link:

   "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" +

   The parameters used are appid and units. The data gets returned in JSON/XML and properties used from the response are weather, main and wind. Below is an example of JSON API response.

   ![JSON](https://cdn.glitch.global/062139b3-dde1-4aa9-956a-d8cf20554097/5100b08b-ae62-48be-8d64-6cd63dd22ca5.weather%20API%20response.png?v=1651429516419)

No issues were faced while fetching OpenWeatherMap API data.

 2. ### Google Maps Places API call link:
     
    https://maps.googleapis.com/maps/api/js?key=AIzaSyA_PSrjoG_09pOYNScZQ_6b4YnQyXQSlyQ&libraries=places
    
    There are many parameters like offset, location, radius, language etc. Among which I used 'types' parameter. There are some parameters which can be used specially for autocomplete like geocode, cities, establishment, regoins etc. From which I have used 'cities' parameter.
    
    Sample response in JSON format.
    ![JSON](https://cdn.glitch.global/062139b3-dde1-4aa9-956a-d8cf20554097/mapsjson.png?v=1651432270083)
    
    A Billing error was faced while using the above API. Google has disabled the free usage of Places API which I was unaware of but we can use the Places API for free until 200 credits which is approximately 1000 requests per day which in my case is more than sufficient. So I added billing information and the error was resolved.
    ![error](https://cdn.glitch.global/062139b3-dde1-4aa9-956a-d8cf20554097/billingerror.png?v=1651432360686)
    
    
    
    
### Tween Animation
    
[Link](https://unpkg.com/popmotion@8.1.24/dist/popmotion.global.min.js)
    
The properties passed to Tween are : from ,to and duration.
The container rotates on x-axis from right towards the center and stops.
