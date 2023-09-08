# Project API

In this project, I have used OpenWeatherMap API combined with Google Maps Places API and the Popmotion animation called Tween. We can search for any place in the search bar for real-time weather data where the place suggestions are auto-populated using Google Maps Places API with an autocomplete feature.

- [OpenWeatherMap API link](https://openweathermap.org/api)
- [Google Maps Places API link](https://console.cloud.google.com/apis/library/places-backend.googleapis.com)
- [Tween animation link](https://popmotion.io/api/tween/)

## How the Data is Fetched

### OpenWeatherMap API

1. The parameters used are appid and units. The data gets returned in JSON/XML and properties used from the response are weather, main and wind. Below is an example of JSON API response.

### Google Maps Places API

2. **Google Maps Places API call link**:

   The parameters used include:
   - `types`: Specifies the type of place you want to search for.
   - Other parameters such as `offset`, `location`, `radius`, `language`, etc., may also be used based on your requirements.

### Tween Animation

The properties passed to Tween are:
- `from`: The starting point of the animation.
- `to`: The ending point of the animation.
- `duration`: The duration of the animation.

The animation effect rotates the container on the x-axis from right towards the center and stops.

