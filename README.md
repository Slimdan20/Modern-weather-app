# Modern-weather-app
A simple weather application that provides real-time weather updates and forecasts for any city worldwide. The app utilizes geolocation to fetch user’s current location and displays the weather details accordingly, while also allowing manual city searches.

**Features**
1. Real-time weather updates by location:
Automatically detects user’s location and displays the current weather details for that location.
2. Fallback to default city:
In situations where users deny location access, the app defaults to displaying weather details for a predefined city.
3. City search functionality:
Users can enter the name of any city in the search bar to view the weather details for that location.
4. Weekly weather forecast:
The app provides a detailed weekly weather forecast for specified cities.
5. Weather-related icons:
Displays weather-related images/icons based on current weather conditions.
6. Error handling:
Displays meaningful error messages for invalid city names or other errors during API requests.

**Technologies used:**
1. HTML, CSS, JavaScript: For the frontend development
2. OpenWeatherMap and Open-Meteo api: For fetching real-time weather data and forecasts.
3. Navigator Geolocation api: For obtaining user’s current location.
   
**How to use:**
1. Open the app in a browser.
2. Allow location access to view weather details for your current location.
Note that if access is denied, app will automatically display weather details for the default city.
3. Use the search bar to enter the name of a city and view its weather details.
4. View both current weather updates and weekly forecasts for any searched city.
